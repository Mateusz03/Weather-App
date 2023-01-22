import { useContext } from "react";
import styled from "styled-components";
import { ModeContext } from "../../App";
// #282828
const Container = styled.p`
  background-color: ${(props) =>
    props.mode === "dark" ? "#bbd8ea" : "#282828"};
  color: ${(props) => (props.mode === "dark" ? "#101014" : "#dee4e7")};
  padding: 3px 15px 3px 15px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 100px;
`;

const RightBar = () => {
  const { mode } = useContext(ModeContext);
  return <Container mode={mode}>Forecast</Container>;
};

export default RightBar;
