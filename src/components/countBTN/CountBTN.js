import {React,useState, useEffect} from "react";
import "./CountBTN.css"

const CountBtn = (props) =>{
    const [currentCnt, setCurrentCnt] = useState(0)

    const handleClick = () => {
         setCurrentCnt(currentCnt + props.incrementBy)
    }

    useEffect(() => {
        if (currentCnt===10){
            alert("We made it")
        }
    }, [currentCnt])

    return <div>
        <button onClick={handleClick}>+{props.incrementBy} </button>
        <div className='count-display'>{currentCnt}</div>
    </div>
}

export default CountBtn