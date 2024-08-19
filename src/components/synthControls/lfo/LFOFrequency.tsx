import PositionSlider from "@/components/custom-ui/slider/PositionSlider";

export default function LFOFrequency() {
  return (
    <div className="lfo-frequency h-[40%] w-full">
      <div className="lfo-frequency-slider -mt-1 flex h-full w-[50%] flex-col items-center justify-center gap-1">
        <p
          onDragStart={(e) => e.preventDefault()}
          className="cursor-default select-none font-nohemi text-[0.6rem] font-medium text-centauri-black opacity-85"
        >
          Frequency
        </p>
        <PositionSlider
          type="lfo"
          defaultValue={0.1}
          min={0.1}
          max={20}
          className="h-8 w-full rounded bg-centauri-black"
        />
      </div>
    </div>
  );
}
