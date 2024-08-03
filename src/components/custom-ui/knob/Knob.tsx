import { useEffect, useRef } from "react";
import "./Knob.css";
import {
  degreeToPercent,
  percentToValue,
  valueToPercent,
  percentToDegree,
} from "./knobFunctions";

const DEFAULT_KNOB_OFFSET = -135;

export default function Knob({
  min = 0,
  max = 10,
  initValue = 5,
  className,
  speed = 1,
  onChange = () => {},
}: {
  min?: number;
  max?: number;
  initValue?: number | string;
  className?: string;
  speed?: number;
  onChange?: (value: number) => void;
}) {
  const inputref = useRef<null | HTMLDivElement>(null);
  const initDegreeRef = useRef<number>(
    percentToDegree(valueToPercent(min, max, Number(initValue))),
  );

  let degree = percentToDegree(valueToPercent(min, max, Number(initValue)));
  let prevDelta: number = 0;
  let mousepos: number;

  // let knobClassName: string;
  // if (className) {
  //   knobClassName = `knob ${className}`;
  // } else {
  //   knobClassName = "knob";
  // }

  /*
  | Sets knob's position on initial render based on the initValue
  */
  useEffect(() => {
    (inputref.current as HTMLDivElement).style.transform = `rotate(${
      initDegreeRef.current + DEFAULT_KNOB_OFFSET
    }deg)`;
  }, []);

  /*
  | Assings event listeners to the degree calculating function
  | and the cleanup function
  |
  | NUMBER 1 IN THE EXECUTION FLOW
  */
  function handleInitializePositionTracker(e: React.MouseEvent) {
    e.stopPropagation();

    mousepos = e.clientY;

    document.addEventListener("mousemove", calculatePositionMiddleware);
    document.addEventListener("mouseup", trackerCleanup);
  }

  function calculatePositionMiddleware(e: MouseEvent) {
    e.stopPropagation();

    calculatePosition(e, mousepos);
  }

  /*
  | Calculates degrees that the knob is rotated for
  |
  | NUMBER 2 IN THE EXECUTION FLOW
  */
  function calculatePosition(e: MouseEvent, mousepos: number) {
    e.stopPropagation();
    /*
    | Distance from the mouse to the knob's center on X and Y axis
    */
    const deltaY = mousepos - e.clientY;

    if (deltaY > prevDelta && degree < 270) {
      degree += (deltaY - prevDelta) * speed;
    } else if (deltaY < prevDelta && degree > 0) {
      degree -= (prevDelta - deltaY) * speed;
    }

    prevDelta = deltaY;

    if (degree >= 270) {
      propagatePosition(270);
    } else if (degree > 0) {
      propagatePosition(degree);
    } else {
      propagatePosition(0);
    }

    prevDelta = deltaY;
  }

  /*
  | Updates knob's visual rotation amount, updates prevDeg,
  | and passes the converted value to the onChange
  |
  | NUMBER 3 IN THE EXECUTION FLOW
  */
  function propagatePosition(degree: number | string) {
    (inputref.current as HTMLDivElement).style.transform = `rotate(${
      Number(degree) + DEFAULT_KNOB_OFFSET
    }deg)`;

    onChange(percentToValue(min, max, degreeToPercent(Number(degree))));
  }

  /*
  | Cleans up all event listeners after the LMB was released
  |
  | LAST IN THE EXECUTION FLOW
  */
  function trackerCleanup() {
    document.removeEventListener("mousemove", calculatePositionMiddleware);
    prevDelta = 0;

    document.removeEventListener("mouseup", trackerCleanup);
  }

  return (
    <div className="knob-wrapper relative">
      <div
        onMouseDown={handleInitializePositionTracker}
        onDoubleClick={() => propagatePosition(initDegreeRef.current)}
        onDragStart={(e) => e.preventDefault()}
        draggable="false"
        ref={inputref}
        className={`${className} knob cursor-grab`}
      ></div>
      <div className="min-position absolute bottom-[3%] h-[4%] w-[11%] -rotate-45 bg-centauri-black opacity-50"></div>
      <div className="max-position absolute -right-[0%] bottom-[3%] h-[4%] w-[11%] rotate-45 bg-centauri-black opacity-50"></div>
      <div className="middle-position absolute -top-[15%] h-[4%] w-[11%] translate-x-[410%] rotate-90 bg-centauri-black opacity-50"></div>
    </div>
  );
}
