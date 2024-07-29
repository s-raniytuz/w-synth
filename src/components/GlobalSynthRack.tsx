import SynthOneContainer from "./SynthOneContainer";

export default function GlobalSynthRack() {
  return (
    <div id="global-synth-rack" className="flex w-full gap-1">
      <div className="synth-column flex w-[60%] flex-col gap-1">
        <SynthOneContainer />
        <div className="font-subjectivity filter-one-placeholder flex h-[50%] w-full items-center justify-center rounded bg-gray-700 text-sm">
          Coming soon...
        </div>
      </div>
      <div id="filter-column" className="flex h-full w-[35%] flex-col gap-1">
        <div className="font-subjectivity filter-one-placeholder flex h-[50%] w-full items-center justify-center rounded bg-gray-700 text-sm">
          Coming soon...
        </div>
        <div className="font-subjectivity filter-one-placeholder flex h-[50%] w-full items-center justify-center rounded bg-gray-700 text-sm">
          Coming soon...
        </div>
      </div>
      <nav
        id="synth-rack-nav"
        className="flex h-full w-[4%] items-center justify-center bg-slate-500 text-[10px]"
      >
        <p className="rotate-90">Coming soon...</p>
      </nav>
    </div>
  );
}
