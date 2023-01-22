import { useContext } from "react";
import styled from "styled-components";
import { ModeContext } from "../../App";

const Container = styled.div`
  display: flex;
  gap: 32px;
`;

const Text = styled.p`
  font-size: 20px;
  color: ${(props) =>
    props.selected === true
      ? props.mode === "dark"
        ? "#ffffff"
        : "#282828"
      : props.mode === "dark"
      ? "rgba(255, 255, 255,0.4)"
      : "rgba(40, 40, 40,0.6)"};
  font-weight: bold;
  cursor: pointer;
`;

const LeftBar = () => {
  const { mode, timeForecast, setTimeForecast, setDay, setMove } =
    useContext(ModeContext);

  return (
    <Container>
      <Text
        onClick={() => {
          setTimeForecast("Today");
          setDay(0);
          setMove(0);
        }}
        selected={timeForecast === "Today" ? true : false}
        mode={mode}
      >
        Today
      </Text>
      <Text
        onClick={() => {
          setTimeForecast("Tommorow");
          setDay(0);
          setMove(0);
        }}
        selected={timeForecast === "Tommorow" ? true : false}
        mode={mode}
      >
        Tommorow
      </Text>
      <Text
        onClick={() => {
          setTimeForecast("Next 16 days");
          setMove(0);
        }}
        selected={timeForecast === "Next 16 days" ? true : false}
        mode={mode}
      >
        Next 16 days
      </Text>
    </Container>
  );
};

export default LeftBar;
