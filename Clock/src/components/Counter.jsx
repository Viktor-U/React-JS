import { useState } from "react"

export default function Counter() {
    const stateArr = useState(0);
    let seconds = stateArr[0];
    let setCount = stateArr[1];

    setTimeout(() =>  {

        setCount(seconds +1)
        
    }, 1000);


    let minutes = 0;
    setTimeout(()=> {
        minutes ++;
        setCount = 0;
    }, 6000)


    return(

        <>
        
        <h1>Clock</h1>
        <h2>{minutes}:{seconds}</h2>
        
        </>
    )
}