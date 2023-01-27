import styled, { keyframes } from "styled-components";
import { ModeContext } from "../../App";
import { useContext } from "react";

const rotateAnimation = keyframes`
0%{transform:rotate(0deg)}
100%{transform:rotate(360deg)}`;

const Container = styled.div`
  width: 75px;
  height: 75px;
  border: 5px solid transparent;
  border-top: ${(props) =>
    props.mode === "dark" ? "5px solid #adcade" : "5px solid #282828"};
  border-radius: 100%;
  box-sizing: border-box;
  transition: 60ms;
  animation-name: ${rotateAnimation};
  animation-duration: 1500ms;
  animation-iteration-count: infinite;
`;

const Loader = () => {
  const { mode } = useContext(ModeContext);
  return <Container mode={mode}></Container>;
};
export default Loader;
