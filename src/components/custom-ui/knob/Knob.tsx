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
  initValue?: number;
  className?: string;
  speed?: number;
  onChange?: (value: number) => void;
}) {
  const inputref = useRef<null | HTMLDivElement>(null);

  let degree = percentToDegree(valueToPercent(min, max, initValue));
  let prevDelta: number = 0;
  let mousepos: number;

  const initialRotation = percentToDegree(valueToPercent(min, max, initValue));

  let knobClassName: string;
  if (className) {
    knobClassName = `knob ${className}`;
  } else {
    knobClassName = "knob";
  }

  /*
  | Sets knob's position on initial render based on the initValue
  */
  useEffect(() => {
    (inputref.current as HTMLDivElement).style.transform = `rotate(${
      initialRotation + DEFAULT_KNOB_OFFSET
    }deg)`;
  }, [initialRotation]);

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
  function propagatePosition(degree: number) {
    (inputref.current as HTMLDivElement).style.transform = `rotate(${
      degree + DEFAULT_KNOB_OFFSET
    }deg)`;

    onChange(percentToValue(min, max, degreeToPercent(degree)));
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
    <div
      onMouseDown={handleInitializePositionTracker}
      onDoubleClick={() => propagatePosition(initValue)}
      onDragStart={(e) => e.preventDefault()}
      draggable="false"
      ref={inputref}
      className={`${className} knob`}
    ></div>
  );
}
