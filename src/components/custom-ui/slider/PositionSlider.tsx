import { useRef, useState } from "react";
import {
  degreeToPercent,
  percentToValue,
  valueToPercent,
  percentToDegree,
} from "../knob/knobFunctions";
import { cn } from "@/lib/utils";

export default function PositionSlider({
  min = 0,
  max = 10,
  initValue = 0,
  defaultValue,
  className,
  speed = 1,
  onChange = () => {},
  type = "default",
}: {
  min?: number;
  max?: number;
  initValue?: number;
  defaultValue: number;
  className?: string;
  speed?: number;
  onChange?: (value: number) => void;
  type?: "default" | "lfo";
}) {
  const inputref = useRef<null | HTMLDivElement>(null);
  const degree = useRef(percentToDegree(valueToPercent(min, max, initValue)));
  // const initPosition = useRef(
  //   percentToDegree(valueToPercent(min, max, initValue)),
  // );
  const [sliderState, setSliderState] = useState(initValue);

  let prevDelta: number = 0;
  let mousepos: number;
  /*
  | Sets knob's position on initial render based on the initValue
  */

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

    if (deltaY > prevDelta && degree.current < 270) {
      degree.current += (deltaY - prevDelta) * speed;
    } else if (deltaY < prevDelta && degree.current > 0) {
      degree.current -= (prevDelta - deltaY) * speed;
    }

    prevDelta = deltaY;

    if (degree.current >= 270) {
      propagatePosition(270);
    } else if (degree.current > 0) {
      propagatePosition(degree.current);
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
    let value: number;
    if (type === "default") {
      value = Math.round(percentToValue(min, max, degreeToPercent(degree)));
    } else {
      value =
        Math.round(percentToValue(min, max, degreeToPercent(degree)) * 100) /
        100;
    }
    setSliderState(value);
    onChange(value);
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

  function handleReset(defaultValue: number) {
    const defaultDegree = percentToDegree(
      valueToPercent(min, max, defaultValue),
    );

    degree.current = defaultDegree;

    propagatePosition(defaultDegree);
  }

  return (
    <div
      onMouseDown={handleInitializePositionTracker}
      onDoubleClick={() => handleReset(defaultValue)}
      onDragStart={(e) => e.preventDefault()}
      draggable="false"
      ref={inputref}
      className={cn(
        "flex cursor-grab select-none items-center justify-center bg-black",
        className,
      )}
    >
      {type === "default" ? sliderState : `${sliderState}Hz`}
    </div>
  );
}
