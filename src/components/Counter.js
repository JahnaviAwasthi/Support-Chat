import {useState} from "react";
function Counter()
{
    console.log('render Counter')
    const [number,setNumber]=useState(0);
    function handleClick(e)
    {
        setNumber(number=>number+1);
        
        console.log(number);
        e.stopPropagation();


    }
    return(
        <>
        <h1 style={{color:"white"}}>{number}</h1>
        <button onClick={handleClick}>Add</button>
        </>
    )

}
export default Counter;