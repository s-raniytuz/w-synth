import { useEffect, useRef } from "react";
import "./Knob.css";
import {
  degreeToPercent,
  percentToValue,
  valueToPercent,
  percentToDegree,
} from "./knobFunctions.ts";

const DEFAULT_KNOB_OFFSET = -135;

export default function TrackingKnob({
  min = 0,
  max = 10,
  initValue = 5,
  className,
  onChange = () => {},
}: {
  min?: number;
  max?: number;
  initValue?: number;
  className?: string;
  onChange?: (value: number) => void;
}) {
  const knobRef = useRef<null | HTMLDivElement>(null);

  let prevDeg = percentToDegree(valueToPercent(min, max, initValue));

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
    (knobRef.current as HTMLDivElement).style.transform = `rotate(${
      initialRotation + DEFAULT_KNOB_OFFSET
    }deg)`;
  }, [initialRotation]);

  /*
  | Assings event listeners to the degree calculating function
  | and the cleanup function
  |
  | NUMBER 1 IN THE EXECUTION FLOW
  */
  function handleInitializePositionTracker() {
    document.addEventListener("mousemove", calculatePosition);
    document.addEventListener("mouseup", trackerCleanup);
  }

  /*
  | Calculates degrees that the knob is rotated for
  |
  | NUMBER 2 IN THE EXECUTION FLOW
  */
  function calculatePosition(e: MouseEvent) {
    const knob = knobRef.current as HTMLDivElement;

    /*
    | X and Y coordinates of the knob's center
    */
    const xPos = knob.offsetLeft + knob.offsetWidth / 2;
    const yPos = knob.offsetTop + knob.offsetHeight / 2;

    /*
    | Distance from the mouse to the knob's center on X and Y axis
    */
    const deltaX = (xPos - e.clientX) * -1;
    const deltaY = yPos - e.clientY;

    /*
    | converts deltas to radians 
    | (it is increased by the offset to compensate for negative values in the left part of the knob)
    */
    const rad =
      Math.atan2(deltaX, deltaY) +
      Math.abs(DEFAULT_KNOB_OFFSET) * (Math.PI / 180);

    /*
    | converts radians to degrees
    */
    const deg = Number((rad * (180 / Math.PI)).toFixed(4));

    /*
    | Prevents the knob from jumping between extreme values
    | THIS PART MIGHT CAUSE BUGS AS IT IS NOT 100% PRECISE
    */
    if (deg >= 0 && deg <= 270) {
      if (prevDeg <= 5 && deg <= 15) {
        propagatePosition(deg);
      } else if (prevDeg >= 265 && deg >= 255) {
        propagatePosition(deg);
      } else if (prevDeg > 5 && prevDeg < 265) {
        propagatePosition(deg);
      }
    }
  }

  /*
  | Updates knob's visual rotation amount, updates prevDeg,
  | and passes the converted value to the onChange
  |
  | NUMBER 3 IN THE EXECUTION FLOW
  */
  function propagatePosition(deg: number) {
    prevDeg = deg;
    (knobRef.current as HTMLDivElement).style.transform = `rotate(${
      deg + DEFAULT_KNOB_OFFSET
    }deg)`;

    onChange(percentToValue(min, max, degreeToPercent(deg)));
  }

  /*
  | Cleans up all knob related event listeners after the LMB was released
  |
  | LAST IN THE EXECUTION FLOW
  */
  function trackerCleanup() {
    document.removeEventListener("mousemove", calculatePosition);
    prevDeg = 90;
    document.removeEventListener("mouseup", trackerCleanup);
  }

  return (
    <div
      onMouseDown={handleInitializePositionTracker}
      onDoubleClick={() => propagatePosition(initValue)}
      ref={knobRef}
      className={knobClassName}
    ></div>
  );
}
