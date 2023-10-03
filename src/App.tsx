import { Counter } from "./foundations/Counter";
import { CounterBy } from "./foundations/CounterBy";
import { CounterEffect } from "./foundations/CounterEffect";

function App() {
  return (
    <>
      <Counter />
      <CounterBy initialValue={10} />
      <CounterEffect />
    </>
  );
}

export default App;
