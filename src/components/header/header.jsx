import styled from "styled-components";
import { Input, Location, DarkModeSwitch } from "../imports.js";
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <Container>
      <Location />
      <Input />
      <DarkModeSwitch />
    </Container>
  );
};
export default Header;
