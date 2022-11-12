import React, {useState,useEffect,useMemo } from 'react'

export default function UseMemo() {

    const [sum, Setsum] = useState(0)
    const [dec, Setdec] = useState(100)

    const vivek = useMemo(function mul() {
        console.log("&&&&&&&&&&&&&&&&&")
        return sum * 10
    }, [sum])

   

    return (
        <>

            <div>UseMemo</div>

           <h1>{vivek}</h1>
            <h1>SUM:--{sum}</h1>
            <h1>DEC:--{dec}</h1>
            <button onClick={() => { Setsum(sum + 1) }}>Increment</button>
            <button onClick={() => { Setdec(dec - 1) }}>Decrement</button>



        </>

    )
}
