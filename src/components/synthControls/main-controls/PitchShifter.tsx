import PositionSlider from "@/components/custom-ui/slider/PositionSlider";
import { useControllerContext } from "@/context/controllerContext";
import { useSynthContext } from "@/context/synthContext";
import useMountEffect from "@/hooks/useMountEffect";
import { PITCH_DEFAULT } from "@/localStorage/localStorageDefaults";
import { synthOnePitchActions } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export default function PitchShifter() {
  const dispatch = useAppDispatch();
  const controller = useControllerContext();
  const synth = useSynthContext();
  const pitch = useAppSelector((state) => state.synthOnePitch.pitch);

  useMountEffect(() => {
    controller.firstOctave = 4 + pitch;
    controller.secondOctave = 5 + pitch;
  });

  function handlePitchChange(value: number) {
    synth.releaseAll();
    controller.firstOctave = 4 + value;
    controller.secondOctave = 5 + value;
    dispatch(synthOnePitchActions.setPitchState(value));

    if (value !== PITCH_DEFAULT) {
      localStorage.setItem("synthOnePitch", JSON.stringify(value));
    } else {
      localStorage.removeItem("synthOnePitch");
    }
  }

  return (
    <div className="pitch-shift flex w-full flex-col items-center gap-2">
      <p
        onDragStart={(e) => e.preventDefault()}
        className="cursor-default select-none font-nohemi text-[0.7rem] font-medium text-centauri-black opacity-85"
      >
        Octave
      </p>

      <PositionSlider
        className="w-[50%] rounded bg-centauri-black opacity-95"
        min={-3}
        max={2}
        initValue={pitch}
        defaultValue={PITCH_DEFAULT}
        onChange={handlePitchChange}
        speed={2}
      />
    </div>
  );
}
