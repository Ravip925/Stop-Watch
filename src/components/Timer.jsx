import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Buttons from "./Buttons"
import TimerClock from "./TimerClock"


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #26de81;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`
const Wrapper = styled.div`
    width: 50%;
    height: 50vh;
    background-color: #fed330;
    box-shadow: 
    inset 0 0 8px #59595991,
    inset 0 0 10px #5a5a5a8d,
    inset 0 0 12px #65656578,
    inset 0 0 15px #92929268;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
`
const Heading = styled.h1`
margin-top: -70px;
font-size: 50px;
    color: #0b0bc6;
    text-shadow: 0px 0px 0 rgb(224,224,224),
                 1px 1px 0 rgb(213,213,213),
                 2px 2px 0 rgb(202,202,202),
                 3px 3px 0 rgb(191,191,191),
                 4px 4px 0 rgb(180,180,180),
                 5px 5px  0 rgb(169,169,169),
                 6px 6px 5px rgba(56,56,56,0.28),
                 6px 6px 1px rgba(56,56,56,0.5),
                 0px 0px 5px rgba(56,56,56,.2);
`

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [start, setStart] = useState(false);
    let reset = useRef();
    useEffect(() => {
        if(start){
            reset.current = setInterval(() => {
                setSeconds(seconds+1);
                if(seconds === 59){
                    setMinutes(minutes + 1);
                    setSeconds(0)
                }
            }, 1000); 
        }
        return ()=>clearInterval(reset.current)
    });

    const Reset = ()=>{
        setSeconds(0);
        setMinutes(0);
        setStart(false)
    }
   return (
    <Container>
        <Heading>STOP WATCH</Heading>
        <Wrapper>
            <TimerClock seconds={seconds} minutes={minutes}/>
            <Buttons setStart={setStart} start={start} Reset={Reset}/>
        </Wrapper>
    </Container>
  )
}

export default Timer