import { useSynthContext } from "../../../context/synthContext";
import Knob from "../../custom-ui/knob/Knob";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { synthOneVolumeActions } from "@/store";
import { VOLUME_DEFAULT } from "@/localStorage/localStorageDefaults";
import useMountEffect from "@/hooks/useMountEffect";

export default function Volume() {
  const dispatch = useAppDispatch();
  const volume = useAppSelector((state) => state.synthOneVolume.volume);

  const synth = useSynthContext();

  useMountEffect(() => {
    synth.volume.value = volume;
  });

  function handleVolumeChange(value: number) {
    const roundedValue = Math.round(value);

    if (roundedValue === 0) {
      synth.volume.value = -100;
      dispatch(synthOneVolumeActions.setVolumeState(-100));
    } else {
      synth.volume.value = roundedValue;
      dispatch(synthOneVolumeActions.setVolumeState(roundedValue));
    }

    if (roundedValue !== VOLUME_DEFAULT) {
      localStorage.setItem("synthOneVolume", JSON.stringify(roundedValue));
    } else {
      localStorage.removeItem("synthOneVolume");
    }
  }

  return (
    <div className="volume flex w-full flex-col items-center gap-3">
      <p
        onDragStart={(e) => e.preventDefault()}
        className="cursor-default select-none font-nohemi text-[0.7rem] font-medium text-centauri-black opacity-85"
      >
        Volume
      </p>

      <Knob
        min={0}
        max={35}
        initValue={volume === -100 ? 0 : volume}
        defaultValue={VOLUME_DEFAULT}
        onChange={handleVolumeChange}
        className="bg-centauriBlack h-8 w-8"
      />
    </div>
  );
}
