import React from 'react'
import { useCounterContext } from './CounterProvider';

const Counter = () => {
    //!By using custom hook we can consume the context in any component without using useContext hook again and again
    let data = useCounterContext();
    console.log(data);

    //! Destructuring the data
    let { count, setCount } = data;

    return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Counter