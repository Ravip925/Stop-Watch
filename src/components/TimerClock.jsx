import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 55%;
  user-select: none;
  height: 12vh;
  overflow: hidden;
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

  ${mobile({
    width: "80%",
    marginTop: "-20px",
  })}
`;
const Wrapper = styled.div`
  width: 52%;
  height: 12vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${mobile({
    width: "80%",
  })}
`;
const Min = styled.h1`
  font-size: 80px;
  font-weight: 100;
  color: azure;
  font-family: Arial, Helvetica, sans-serif;

  ${mobile({
    fontSize: "40px",
  })}
`;
const Sec = styled.h1`
  font-size: 40px;
  font-weight: 200;
  margin: 5px;
  color: azure;
  font-family: Arial, Helvetica, sans-serif;
  ${mobile({
    fontSize: "40px",
  })}
`;
const Span = styled.span`
  font-weight: bold;
  font-size: 40px;
  color: #ff0000;
  margin: -10px 20px 0 20px;
  ${mobile({
    margin: "-10px 10px 0 10px",
  })}
`;
const MiliSec = styled.h1`
  font-size: 40px;
  font-weight: 200;
  margin: 5px;
  color: azure;
  font-family: Arial, Helvetica, sans-serif;
  ${mobile({
    fontSize: "40px",
  })}
`;

const TimerClock = ({ time }) => {
  return (
    <Container>
      <Wrapper>
        <Min>{time.m < 10 ? "0" + time.m : time.m}</Min>
        <Span>:</Span>
        <Sec>{time.s < 10 ? "0" + time.s : time.s}</Sec>
        <Span>:</Span>
        <MiliSec>{time.ms < 10 ? "0" + time.ms : time.ms}</MiliSec>
      </Wrapper>
    </Container>
  );
};

export default TimerClock;
