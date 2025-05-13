import "./App.css";
import ViewBox from "./components/PercentView";
import { useState } from "react";

// type ArrowType = (x: number) => number;

// const arrow1: ArrowType = (x: number): number => x + 1;

// const arrow2: ArrowType = (x: number): number => x + 1;

// const arrow3: ArrowType = (x: number): number => {
//   let y: number = x + 1;
//   return y;
// };

function App() {
  const [rangeValue, setRangeValue] = useState(100);
  const iniciaValue: number = 20;
  return (
    <>
      <div>
        <input
          type="range"
          min={0}
          max={100}
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(Number(e.target.value))}
        />
      </div>
      <ViewBox
        value={rangeValue}
        max={100}
        makeColor={(p) => `hsl(0, 100%, ${100 - p * 100}%)`}
      />
      <ViewBox
        value={100 - rangeValue}
        max={100}
        makeColor={(p) => `hsl(120, 100%, ${100 - p * 100}%)`}
      />
      <ViewBox
        value={25 + rangeValue/2}
        max={100}
        makeColor={(p) => `hsl(240, 100%, ${100 - p * 100}%)`}
      />
    </>
  );
}

export default App;
