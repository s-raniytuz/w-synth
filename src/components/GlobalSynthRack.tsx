import SynthOneContainer from "./SynthOneContainer";

export default function GlobalSynthRack() {
  return (
    <div id="global-synth-rack" className="flex flex-grow gap-1">
      <div className="synth-column flex min-w-[57.6rem] flex-col gap-1">
        <SynthOneContainer />
        <div className="filter-one-placeholder flex min-h-[20.60rem] w-full flex-1 items-center justify-center rounded bg-gray-700 font-subjectivity text-sm">
          Coming soon...
        </div>
      </div>
      <div
        id="filter-column"
        className="flex h-full min-w-[33.6rem] flex-col gap-1"
      >
        <div className="filter-one-placeholder flex w-full flex-1 items-center justify-center rounded bg-gray-700 font-subjectivity text-sm">
          Coming soon...
        </div>
        <div className="filter-one-placeholder flex w-full flex-1 items-center justify-center rounded bg-gray-700 font-subjectivity text-sm">
          Coming soon...
        </div>
      </div>
      <nav
        id="synth-rack-nav"
        className="flex h-full min-w-[3.84rem] items-center justify-center bg-slate-500 text-[10px]"
      >
        <p className="rotate-90">Coming soon...</p>
      </nav>
    </div>
  );
}
