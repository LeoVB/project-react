import { useEffect, useState } from "react";

const MAX_VALUE = 20;
const MIN_VALUE = -20;

const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initialValue);
    }


    const maximum = () => {
        return counter === MAX_VALUE;
    }

    const minimum = () => {
        return counter === MIN_VALUE;
    }
    return [counter, increment, decrement, reset, maximum, minimum];

}
export default useCounter;
