import './App.css';
import Greet, { increment } from './components/Greet'
import GreetClass from './components/GreetClass'
import { useState } from 'react'

const App = () => {
  let [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* 👇🏾 Changing the contents of the Greet() will need a refresh. */}
      {Greet()}
      {/* 👇🏾 Changing the contents of the Greet() will not need a refresh. */}
      {/* Use this convention */}
      <Greet />
      {/* Welcome */}
      <GreetClass />
      <h1>
        {new GreetClass({}, "version").call()}
      </h1>

      <p>You clicked {count} times!</p>
      <button onMouseDown={() => setCount(increment(count))}>Click Me!</button>
    </div>
  );
}

export default App;
