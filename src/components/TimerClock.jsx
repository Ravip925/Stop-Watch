import styled from "styled-components";

const Container = styled.div`
  width: 45%;
  height: 12vh;
  background-color: #3be4d6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px 0px, rgba(0, 0, 0, 0.09) 0px 4px 2px 0px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px 0px, rgba(0, 0, 0, 0.09) 0px 16px 8px 0px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px 0px;
`;
const Wrapper = styled.div`
  width: 45%;
  height: 12vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Min = styled.h1`
  font-size: 80px;
  font-weight: 100;
  color: azure;
  font-family: Arial, Helvetica, sans-serif;
`;
const Sec = styled.h1`
  font-size: 40px;
  font-weight: 200;
  color: azure;
  font-family: Arial, Helvetica, sans-serif;
`;
const Span = styled.span`
  font-weight: bold;
  font-size: 40px;
  color: #ff0000;
  margin: -10px 20px 0 20px;
`;

const TimerClock = ({seconds,minutes}) => {
  return (
    <Container>
      <Wrapper>
        <Min>{minutes<10? "0"+minutes: minutes}</Min>
        <Span>:</Span>
        <Sec>{seconds<10 ? "0"+seconds: seconds}</Sec>
      </Wrapper>
    </Container>
  );
};

export default TimerClock;
