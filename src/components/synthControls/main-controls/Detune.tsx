import PositionSlider from "@/components/custom-ui/slider/PositionSlider";
import { useSynthContext } from "@/context/synthContext";
import useMountEffect from "@/hooks/useMountEffect";
import { DETUNE_DEFAULT } from "@/localStorage/localStorageDefaults";
import { synthOneDetuneActions } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export default function Detune() {
  const dispatch = useAppDispatch();
  const synth = useSynthContext();
  // const detune = useAppSelector((state) => state.synthOneOptions.detune);
  const detune = useAppSelector((state) => state.synthOneDetune.detune);

  useMountEffect(() => {
    synth.set({
      detune: detune,
    });
  });

  function handleDetuneChange(value: number) {
    synth.set({
      detune: value,
    });
    dispatch(synthOneDetuneActions.setDetune(value));
    if (value !== DETUNE_DEFAULT) {
      localStorage.setItem("synthOneDetune", JSON.stringify(value));
    } else {
      localStorage.removeItem("synthOneDetune");
    }
  }

  return (
    <div className="detune flex w-full flex-col items-center gap-2">
      <p
        onDragStart={(e) => e.preventDefault()}
        className="cursor-default select-none font-nohemi text-[0.7rem] font-medium text-centauri-black opacity-85"
      >
        Detune
      </p>

      <PositionSlider
        className="w-[50%] rounded bg-centauri-black opacity-95"
        min={-100}
        max={100}
        defaultValue={DETUNE_DEFAULT}
        initValue={detune}
        onChange={handleDetuneChange}
      />
    </div>
  );
}
