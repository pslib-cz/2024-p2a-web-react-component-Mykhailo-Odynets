import "./App.css";
import ViewBox from "./components/PercentView";

// type ArrowType = (x: number) => number;

// const arrow1: ArrowType = (x: number): number => x + 1;

// const arrow2: ArrowType = (x: number): number => x + 1;

// const arrow3: ArrowType = (x: number): number => {
//   let y: number = x + 1;
//   return y;
// };

function App() {
  return (
    <>
      <ViewBox
        value={20}
        max={100}
        makeColor={(p) => `hsl(0, 100%, ${100 - p * 100}%)`}
      />
      <ViewBox
        value={50}
        max={100}
        makeColor={(p) => `hsl(120, 100%, ${100 - p * 100}%)`}
      />
      <ViewBox
        value={80}
        max={100}
        makeColor={(p) => `hsl(240, 100%, ${100 - p * 100}%)`}
      />
    </>
  );
}

export default App;
