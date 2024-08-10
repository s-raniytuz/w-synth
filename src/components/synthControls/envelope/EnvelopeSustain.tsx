import { useSynthContext } from "@/context/synthContext";
import Knob from "@/components/custom-ui/knob/Knob";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { synthOneEnvelopeActions } from "@/store";
import { SUSTAIN_DEFAULT } from "@/localStorage/localStorageDefaults";
import useMountEffect from "@/hooks/useMountEffect";

export default function EnvelopeSustain() {
  const dispatch = useAppDispatch();
  const sustain = useAppSelector((state) => state.synthOneEnvelope.sustain);
  const synth = useSynthContext();

  useMountEffect(() => {
    synth.set({
      envelope: {
        sustain: sustain,
      },
    });
  });

  function handleSustainChange(value: number) {
    synth.set({
      envelope: {
        sustain: value,
      },
    });
    dispatch(synthOneEnvelopeActions.setSustain(value));
    if (value !== SUSTAIN_DEFAULT) {
      localStorage.setItem("synthOneSustain", value.toString());
    } else {
      localStorage.removeItem("synthOneSustain");
    }
  }

  return (
    <div className="envelope-release flex h-[6.295rem] w-full flex-col items-center justify-between py-3">
      <p
        onDragStart={(e) => e.preventDefault()}
        className="cursor-default select-none font-nohemi text-[0.8rem] font-medium text-centauri-black opacity-85"
      >
        Sustain
      </p>

      <Knob
        min={0}
        max={1}
        initValue={sustain}
        defaultValue={SUSTAIN_DEFAULT}
        onChange={handleSustainChange}
        className="bg-centauriBlack h-11 w-11"
      />
    </div>
  );
}
