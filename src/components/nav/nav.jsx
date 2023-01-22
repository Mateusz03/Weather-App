import styled from "styled-components";
import { RightBar, LeftBar } from "../imports";
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navigation = () => {
  return (
    <Container>
      <LeftBar />
      <RightBar />
    </Container>
  );
};
export default Navigation;
