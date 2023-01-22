import styled from "styled-components";
import { ModeContext } from "../../App";
import { useContext } from "react";
import { ReactComponent as Light } from "../../img/light.svg";
import { ReactComponent as Dark } from "../../img/dark.svg";
const Switch = styled.div`
  width: 100px;
  margin-left: calc(35% - 100px);
  background-color: ${(props) =>
    props.mode === "dark" ? "#101014" : "#dee4e7"};
  border: 1px solid
    ${(props) => (props.mode === "dark" ? "#bbd8ea" : "#282828")};
  height: 38px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const SVGstyle = {
  width: "100%",
  transform: "scale(0.5)",
  zIndex: 2,
};

const SVGContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SwitchBall = styled.div`
  width: 50%;
  height: 40px;
  background-color: ${(props) =>
    props.mode === "dark" ? "#bbd8ea" : "#282828"};
  border-radius: 25px;
  z-index: 1;
  position: absolute;
  transition: 150ms;
  left: ${(props) => (props.mode === "dark" ? "51%" : "-1%")};
`;

const DarkModeSwitch = () => {
  const { mode, setMode } = useContext(ModeContext);

  return (
    <Switch mode={mode}>
      <SwitchBall mode={mode} />
      <SVGContainer
        onClick={() => {
          setMode("light");
        }}
      >
        <Light
          style={{
            ...SVGstyle,
            fill: mode === "dark" ? "#bbd8ea" : "#dee4e7",
          }}
        />
      </SVGContainer>
      <SVGContainer
        onClick={() => {
          setMode("dark");
        }}
      >
        <Dark
          style={{ ...SVGstyle, fill: mode === "dark" ? "#101014" : "#282828" }}
        />
      </SVGContainer>
    </Switch>
  );
};
export default DarkModeSwitch;
