import { useState } from "react";
import styled from "styled-components";
import Buttons from "./Buttons";
import TimerClock from "./TimerClock";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #26de81;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 50%;
  height: 50vh;
  background-color: #fed330;
  box-shadow: inset 0 0 8px #59595991, inset 0 0 10px #5a5a5a8d,
    inset 0 0 12px #65656578, inset 0 0 15px #92929268;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const Heading = styled.h1`
  margin-top: -70px;
  font-size: 50px;
  color: #0b0bc6;
  text-shadow: 0px 0px 0 rgb(234, 234, 234), 1px 1px 0 rgb(234, 234, 234),
    2px 2px 0 rgb(234, 234, 234), 3px 3px 0 rgb(234, 234, 234),
    4px 4px 0 rgb(234, 234, 234), 5px 5px 0 rgb(234, 234, 234),
    6px 6px 5px rgba(56, 56, 56, 0.28), 6px 6px 1px rgba(56, 56, 56, 0.5),
    0px 0px 5px rgba(56, 56, 56, 0.2);
`;

const Timer = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0 });
  const [interv, setInterv] = useState();
  const [isStart, setIsStart] = useState(0);

  const start = () => {
    run();
    setInterv(setInterval(run, 10));
    setIsStart(1);
  };
  var updatedMin = time.m,
    updatedSec = time.s,
    updatedMs = time.ms;

  const run = () => {
    updatedMs++;

    if (updatedMs === 99) {
      updatedSec++;
      updatedMs = 0;
    }
    if (updatedSec === 59) {
      updatedMin++;
      updatedSec = 0;
    }
    return setTime({ ms: updatedMs, s: updatedSec, m: updatedMin });
  };

  const stop = () => {
    clearInterval(interv);
    setIsStart(0);
  };
  const reset = () => {
    clearInterval(interv);
    setIsStart(0);
    setTime({ ms: 0, s: 0, m: 0 });
  };

  return (
    <Container>
      <Heading>STOP WATCH</Heading>
      <Wrapper>
        <TimerClock time={time} />
        <Buttons
          isStart={isStart}
          start={start}
          stop={stop}
          reset={reset}
          time={time}
        />
      </Wrapper>
    </Container>
  );
};

export default Timer;
