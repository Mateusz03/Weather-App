import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 5%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  padding: 0px 25vw 0px 25vw;
  background-color: ${(props) =>
    props.mode === "dark" ? "#101014" : "#dee4e7"};
`;

export default AppContainer;
