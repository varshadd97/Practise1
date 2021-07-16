import React, {useEffect, useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [num ,setNum] = useState(50);

    useEffect(() => {
        console.log('TRIGGERING')
    },[]);

    const handleIncrement = () => {
        setCount(count + 1);
        
    }

    const HandleDecrement = () => {
        setNum(num - 1);
        
    }
    
    return (
        <>
        <h1>Functional Counter</h1>
        <h3>Increment</h3>
        <div>Increment Value{count}</div>
        <button onClick={handleIncrement}>Increment value </button>
        <h3>Decrement </h3>
        <div>Decrement value{num}</div>
        <button onClick={HandleDecrement}>Decrement Value {num}</button>
        </>
    )
}

export default Counter
