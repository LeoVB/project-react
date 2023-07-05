import React from 'react'
import useCounter from '../../hooks/useCounter'
const Counter = () => {

    const [
        counter,
        increment,
        decrement,
        reset,
        maximum,
        minimum
    ] = useCounter(0);
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment} disabled={maximum()}>Increment</button>
            <button onClick={decrement} disabled={minimum()}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <p>Maximum value reached: {maximum() ? "Yes" : "No"}</p>
            <p>Minimum value reached: {minimum() ? "Yes" : "No"}</p>
        </div>
    )
}

export default Counter