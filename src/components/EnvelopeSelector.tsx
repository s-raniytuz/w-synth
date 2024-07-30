import EnvelopeAttack from "./synthControls/envelope/EnvelopeAttack";
import EnvelopeDecay from "./synthControls/envelope/EnvelopeDecay";
import EnvelopeSustain from "./synthControls/envelope/EnvelopeSustain";
import EnvelopeRelease from "./synthControls/envelope/EnvelopeRelease";

export default function EnvelopeSelector() {
  return (
    <div className="envelope-selector flex h-full w-full justify-between px-1">
      <EnvelopeAttack />
      <EnvelopeDecay />
      <EnvelopeSustain />
      <EnvelopeRelease />
    </div>
  );
}
