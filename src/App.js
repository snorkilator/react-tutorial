//exploring how state change effects rerednering of child components
// also trying object properties with seperate useState origins constructed within custom hook
import './App.css';
import { useState } from "react"


function useCompoundState() {
  const [a, setA] = useState("not changed")
  const [b, setB] = useState("not changed")
  return { a: a, b: b, setA: setA, setB: setB }
}

function App() {
  const obj = useCompoundState()

  //demonstrate objects with multiple state variables
  // look at how it effects event updates
  return (
    <div className="App">
      <button onClick={() => obj.setA("changed")}>change A</button>
      <UpdateMeA a={obj.a} />
      <button onClick={() => obj.setB("changed")}>change B</button>
      <UpdateMeB b={obj.b} />
    </div>
  );
}
function UpdateMeA(props) {
  console.log("updateA")
  return <p>A: {props.a}</p>
}
function UpdateMeB(props) {
  console.log("updateB")
  return <p>B: {props.b}</p>
}

export default App;
