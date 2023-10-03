import { Counter } from "./foundations/Counter";
import { CounterBy } from "./foundations/CounterBy";

function App() {
  return (
    <>
      <Counter />
      <CounterBy initialValue={10} />
    </>
  );
}

export default App;
