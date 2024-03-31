import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { MyContext } from './context/CounterContext';

const Increment = () => {
    const { state, state: {count}, dispatch } = useContext(MyContext);
    console.log("....", state)
    const myfunc = () => {
        dispatch({type:"INCREMENT"})
    }
    return (
        <div>
            <div>{count}</div>
            <Button onClick={myfunc}>+</Button>
            {" "}
            <Button onClick={()=> dispatch({type: "DECREMENT"})}>-</Button>
        </div>
    )
}

export default Increment