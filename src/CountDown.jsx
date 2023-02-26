import { useEffect, useState } from "react";
import "./CountDown.css"
const Countdown = () => {

    const [secends, setSecends] = useState(0)

    const handleKeyDown = (event)=>{
        if(event.key === "Enter"){
            const inputTime = Math.floor(event.target.value)
            if(isNaN(inputTime)){
                setSecends(1)
            }else{
                setSecends(inputTime)
            }
        }
    }
    useEffect(()=>{
        let intervalId;
        if(secends > 0){
            intervalId = setInterval(()=>{
                setSecends((prevTime) => prevTime - 1)
            }, 1000)
        }else{
            setSecends(0)
        }
        return () => clearInterval(intervalId)
    }, [secends])
    return (
        <div className="countdown-container">
                <h2>Counterdonw timer</h2>

            <div className="countdown-values">
                
                <div className="countdown-value">
                    <h3 className="big-text">{secends}</h3>
                </div>
            </div>
            <div className="countdown-input-button">
                <input type="text" className="countdown-input" onKeyDown={handleKeyDown} />
            </div>
        </div>
    )
}

export default Countdown;