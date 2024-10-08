import * as Tone from "tone";
import GlobalSynthRack from "./components/GlobalSynthRack";
import Header from "./components/custom-ui/Header";

document.addEventListener("click", async () => {
  await Tone.start();
});

function App() {
  return (
    <div className="app flex flex-grow flex-col">
      <Header />
      <GlobalSynthRack />
    </div>
  );
}

export default App;
