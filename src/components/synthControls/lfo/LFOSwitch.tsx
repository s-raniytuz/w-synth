import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { cn } from "@/lib/utils";
import { synthOneLFOLinkSwitchActions } from "@/store";

const switchClassName = "lfo-switch -mt-1 h-4 w-4 rounded-[50%] cursor-pointer";

export default function LFOSwitch() {
  const dispatch = useAppDispatch();
  const isEnabled = useAppSelector(
    (state) => state.synthOneLFOLinkSwitch.isEnabled,
  );

  function handleSwitch() {
    const currentState = isEnabled;
    dispatch(synthOneLFOLinkSwitchActions.setSwitch());
    if (!currentState !== false) {
      localStorage.setItem("synthOneLfoSwitch", "true");
    } else {
      localStorage.removeItem("synthOneLfoSwitch");
    }
  }

  return (
    <div
      className={
        isEnabled
          ? cn(switchClassName, "bg-centauri-black")
          : cn(switchClassName, "border-centauri-black, border-2")
      }
      onClick={handleSwitch}
    ></div>
  );
}
