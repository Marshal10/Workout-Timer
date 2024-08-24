import { useEffect, useState } from "react";
import Calculator from "./Calculator";
import ToggleSound from "./ToggleSound";

function formatTime(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

function App() {
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(function () {
    const id = setInterval(function () {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <main>
      <h1>Workout Timer</h1>
      <time>For your workout on {time}</time>
      <ToggleSound />
      <Calculator />
    </main>
  );
}

export default App;
