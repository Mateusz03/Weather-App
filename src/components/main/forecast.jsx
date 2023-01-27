import styled from "styled-components";
import { useContext } from "react";
import { ModeContext } from "../../App";
import { Day, Loader } from "../imports";
import { ReactComponent as ArrowImage } from "../../img/arrow.svg";

const Container = styled.div`
  width: 100%;
  height: 40%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: ${(props) =>
    props.loader === true || props.timeForecast !== "Next 16 days"
      ? "center"
      : ""};
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
  flex-direction: column;
`;
const OverflowSwap = styled.div`
  width: calc(250px + 125px * 15 + 25px * 15);
  display: flex;
  width: calc(250px * 16);
  gap: 25px;
  z-index: 1;
  transition: 150ms;
  position: relative;
  left: ${(props) => props.move + "%"};
  display: flex;
  justify-content: ${(props) =>
    props.timeForecast !== "Next 16 days" ? "center" : ""};
  flex-direction: row;
`;

const SwapContainer = styled.div`
  width: 100%;
  height: 10%;
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
const Arrow = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.type === "left" ? "flex-end" : "flex-start"};
  box-sizing: border-box;
  margin-left: ${(props) => (props.type === "right" ? "32px" : "")};
  margin-right: ${(props) => (props.type === "left" ? "32px" : "")};
  transition: 150ms;
  &:hover {
    transform: scale(1.1);
  }
`;

const Forecast = (props) => {
  const { mode, weather, timeForecast, move, setMove, loader } =
    useContext(ModeContext);
  return (
    <Container
      active={props.active}
      loader={loader}
      timeForecast={timeForecast}
    >
      {loader === true ? <Loader /> : ""}
      <OverflowSwap
        active={props.active}
        move={move}
        timeForecast={timeForecast}
      >
        {typeof weather !== "undefined" && loader === false ? (
          timeForecast === "Today" ? (
            <Day
              weather={weather.currentConditions}
              selected={true}
              number={0}
            />
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {typeof weather !== "undefined" && loader === false ? (
          timeForecast === "Tommorow" ? (
            <Day weather={weather.values[1]} selected={true} number={0} />
          ) : (
            ""
          )
        ) : (
          ""
        )}

        {typeof weather !== "undefined" && loader === false
          ? timeForecast === "Next 16 days"
            ? weather.values.map((currentConditions, i) => {
                return <Day key={i} weather={currentConditions} number={i} />;
              })
            : ""
          : ""}
      </OverflowSwap>
      {typeof weather !== "undefined" && loader === false ? (
        timeForecast === "Next 16 days" ? (
          <SwapContainer>
            <Arrow
              type={"left"}
              onClick={() => {
                if (move < 0) setMove(move + 25);
              }}
            >
              <ArrowImage
                style={{
                  fill:
                    mode === "dark" ? "rgba(255, 255, 255, 0.4)" : "#282828",
                }}
              />
            </Arrow>

            <Arrow
              type={"right"}
              onClick={() => {
                if (move > -100) setMove(move - 25);
              }}
            >
              <ArrowImage
                style={{
                  fill:
                    mode === "dark" ? "rgba(255, 255, 255, 0.4)" : "#282828",
                  transform: "rotate(180deg)",
                }}
              />
            </Arrow>
          </SwapContainer>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </Container>
  );
};
export default Forecast;
