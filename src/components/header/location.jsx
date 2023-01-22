import styled from "styled-components";
import { ReactComponent as LocationSVG } from "../../img/location.svg";
import { useContext } from "react";
import { ModeContext } from "../../App";

const Container = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const LocationName = styled.div`
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
`;

const Place = styled.p`
  color: ${(props) => (props.mode === "dark" ? "#ffffff" : "#282828")};
`;

const Country = styled.p`
  color: ${(props) =>
    props.mode === "dark"
      ? "rgba(255, 255, 255, 0.4)"
      : "rgba(40, 40, 40,0.6)"};
`;

const SVGstyle = {
  transform: "scale(0.4)",
  zIndex: 2,
};

const Location = () => {
  const { mode, weather } = useContext(ModeContext);
  return (
    <Container>
      <LocationSVG
        style={{ ...SVGstyle, fill: mode === "dark" ? "#ffffff" : "#282828" }}
      />
      <LocationName>
        <Place mode={mode}>
          {typeof weather === "undefined"
            ? "Location"
            : `${weather.address.split(",")[0]},`}
        </Place>
        &nbsp; {/*this its space code*/}
        <Country mode={mode}>
          {typeof weather === "undefined"
            ? ""
            : `${weather.address.split(",").slice(-1)}`}
        </Country>
      </LocationName>
    </Container>
  );
};

export default Location;
