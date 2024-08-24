import Calculator from "./Calculator";
import ToggleSound from "./ToggleSound";

function App() {
  return (
    <main>
      <h1>Workout Timer</h1>
      <time>For your workout on X</time>
      <ToggleSound />
      <Calculator />
    </main>
  );
}

export default App;
