import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Start = styled.button`
  width: 40%;
  overflow: hidden;
  border-radius: 50px;
  background-color: #00bde7;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #200f81;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }
`;
const ResetButton = styled.button`
  width: 40%;
  overflow: hidden;
  background-color: rgb(218, 4, 4);
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px red, 2px 2px 0px 0px red, 3px 3px 0px 0px red,
    4px 4px 0px 0px red, 5px 5px 0px 0px red;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }
`;

const Buttons = ({ time, start, reset, stop, isStart }) => {
  return (
    <Container>
      <Wrapper>
        {isStart === 0 ? (
          <Start onClick={start}>
            {time.s === 0 && time.ms === 0 ? "Start" : "Resume"}
          </Start>
        ) : (
          <Start onClick={stop}>Stop</Start>
        )}
        <ResetButton onClick={reset}>Reset</ResetButton>
      </Wrapper>
    </Container>
  );
};

export default Buttons;
