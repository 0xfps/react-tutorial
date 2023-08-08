import './App.css';
import CreateElement from './components/CreateElement';
import Greet, { increment } from './components/Greet'
import GreetClass from './components/GreetClass'
import { useState } from 'react'
import Message from './components/Message'
import Counter from './components/Counter'
import SimpleCounter from './components/SimpleCounter'

const App = () => {
  // let [count, setCount] = useState(0)

  return (
    // <div className="App">
    //   {/* 👇🏾 Changing the contents of the Greet() will need a refresh. */}
    //   {/* {Greet()} */}
    //   {/* 👇🏾 Changing the contents of the Greet() will not need a refresh. */}
    //   {/* Use this convention */}
    //   {/* <Greet /> */}
    //   {/* Welcome */}
    //   {/* <GreetClass /> */}
    //   {/* <p>
    //     {new GreetClass({}, "version").call()}
    //   </p> */}

    //   {/* <p>You clicked {count} times!</p>
    //   <button onMouseDown={() => setCount(increment(count))}>Click Me!</button> */}
    // </div>

    <div className='App'>
      <Greet name="Bruce" heroname='Batman'>
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroname='Superman' />
      <Greet name="Diana" heroname='Wonder Woman' />

      <CreateElement />

      <GreetClass name="Barry" heroname='Flash' />

      <Message />
      <Counter />
      <SimpleCounter />
    </div>
  );
}

export default App;
