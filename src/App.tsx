import * as Tone from "tone";
import GlobalSynthRack from "./components/GlobalSynthRack";
import Header from "./components/custom-ui/Header";

Tone.start();

function App() {
  return (
    <>
      <Header />
      <GlobalSynthRack />
    </>
  );
}

export default App;
