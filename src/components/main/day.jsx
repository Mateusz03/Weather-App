import styled from "styled-components";
import { useContext } from "react";
import { ModeContext } from "../../App";
import tempConvert from "../../functions/tempConvert";
import windSpeed from "../../functions/windSpeedConvert";

const Container = styled.div`
  background-color: ${(props) =>
    props.selected === props.number ? "#BBD8EA" : "#1B1A1D"};
  width: ${(props) => (props.selected === props.number ? "250px" : "125px")};
  height: 250px;
  border-radius: 25px;
  transition: 150ms;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Week = styled.div`
  color: ${(props) =>
    props.selected === props.number ? "#101014" : "#FFFFFF"};
  width: ${(props) => (props.selected === props.number ? "100%" : "50%")};
  height: 25%;
  background-color: ${(props) =>
    props.selected === props.number ? "#adcade" : ""};
  border-radius: 25px 25px 0px 0px;
  font-size: ${(props) => (props.selected === props.number ? "18px" : "14px")};
  font-weight: ${(props) => (props.selected === props.number ? "bold" : "500")};
  border-bottom: ${(props) =>
    props.selected === props.number ? "" : "2px solid #ffffff"};
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.selected === props.number ? "space-between" : "center"};
  padding-left: 32px;
  padding-right: 32px;
  box-sizing: border-box;
`;

const DayName = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DateValue = styled.div`
  font-size: 14px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WeekDay = (props) => {
  const date = new Date(props.time);
  let day = date.getDay();

  const changeTime = () => {
    switch (day) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        break;
    }
  };

  return (
    <Week selected={props.selected} number={props.number}>
      <DayName>
        {typeof props.selected !== "undefined"
          ? props.selected === props.number
            ? changeTime()
            : changeTime().substring(0, 3)
          : ""}
      </DayName>
      {typeof props.selected !== "undefined" ? (
        props.selected === props.number ? (
          <DateValue>
            {date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}.
            {date.getMonth() + 1 < 10
              ? `0${date.getMonth() + 1}`
              : date.getMonth() + 1}
            .{date.getFullYear()}
          </DateValue>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </Week>
  );
};

const ParametersContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.selected === props.number ? "" : "center")};
  justify-content: ${(props) =>
    props.selected === props.number ? "" : "center"};
  padding: 32px;
  box-sizing: border-box;
`;

const ActiveParams = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const OffParams = styled.div``;

const Temp = styled.div`
  font-family: "Orbitron", sans-serif;
  font-size: ${(props) => (props.selected === props.number ? "30px" : "28px")};
  color: ${(props) =>
    props.selected === props.number ? "#101014" : "#FFFFFF"};
  font-weight: bold;
`;

const OtherParameters = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
`;

const ParamGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const Bold = styled.div`
  font-family: "Orbitron", sans-serif;
  color: #101014;
  font-weight: bold;
`;

const Parameters = (props) => {
  console.log(props.weather);
  return (
    <ParametersContainer selected={props.selected} number={props.number}>
      {props.selected === props.number ? (
        <ActiveParams>
          <Temp selected={props.selected} number={props.number}>
            {tempConvert(props.weather.temp)}℃
          </Temp>
          <OtherParameters>
            <ParamGroup>
              Pressure
              <Bold>{Math.round(props.weather.sealevelpressure)}hPa</Bold>
            </ParamGroup>
            <ParamGroup>
              Wind <Bold>{windSpeed(props.weather.wspd)}M/s</Bold>
            </ParamGroup>
            <ParamGroup>
              Humdity <Bold>{Math.round(props.weather.humidity)}%</Bold>
            </ParamGroup>
          </OtherParameters>
        </ActiveParams>
      ) : (
        <OffParams>
          <Temp selected={props.selected} number={props.number}>
            {tempConvert(props.weather.temp)}℃
          </Temp>
        </OffParams>
      )}
    </ParametersContainer>
  );
};

const Day = (props) => {
  const { selectedDay, setDay } = useContext(ModeContext);
  return (
    <Container
      selected={typeof selectedDay !== "undefined" ? selectedDay : 0}
      number={props.number}
      onClick={() => {
        setDay(props.number);
      }}
    >
      <WeekDay
        time={
          typeof props.weather.datetimeStr === "undefined"
            ? props.weather.datetime
            : props.weather.datetimeStr
        }
        selected={typeof selectedDay !== "undefined" ? selectedDay : 0}
        number={props.number}
      />
      <Parameters
        weather={props.weather}
        selected={typeof selectedDay !== "undefined" ? selectedDay : 0}
        number={props.number}
      />
    </Container>
  );
};

export default Day;
