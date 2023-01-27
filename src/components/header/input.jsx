import styled from "styled-components";
import { ReactComponent as SearchImage } from "../../img/search.svg";
import { ModeContext } from "../../App";
import { useContext, useState } from "react";
import RequestWeather from "../../functions/requestWeather";

const InputContainer = styled.div`
  display: flex;
  height: 48px;
`;

const ButtonSearch = styled.div`
  width: calc(48px + 16 * 2);
  height: 100%;
  background-color: ${(props) =>
    props.mode === "dark" ? "#282828" : "#dee4e7"};
  border: 1px solid ${(props) => (props.mode === "dark" ? "none" : "#282828")};
  box-sizing: border-box;
  border-radius: 15px 0px 0px 15px;
  padding: 0px 16px 0px 16px;
  cursor: pointer;
`;

const Inp = styled.input`
  width: calc(300px - 16 * 2);
  height: 100%;
  border-radius: 0px 15px 15px 0px;
  border: none;
  outline: none;
  background-color: ${(props) =>
    props.mode === "dark" ? "#282828" : "#dee4e7"};
  box-sizing: border-box;
  border: ${(props) => (props.mode === "dark" ? "" : "1px solid #282828")};
  border-left: ${(props) =>
    props.mode === "dark" ? "1px solid #101014" : "none"};
  padding: 0px 16px 0px 16px;
  color: ${(props) =>
    props.mode === "dark" ? "rgba(255, 255, 255, 0.4)" : "#282828"};
  font-size: 16px;
  font-weight: bold;
`;

const Input = () => {
  const { mode, setWeather, setLoader } = useContext(ModeContext);
  const [cityName, setCityName] = useState("");
  const Search = async () => {
    try {
      setLoader(true);
      setWeather(await RequestWeather(cityName));
      setLoader(false);
    } catch {
      setLoader(false);
    }
  };

  return (
    <InputContainer>
      <ButtonSearch mode={mode}>
        <SearchImage
          onClick={() => {
            Search();
          }}
          style={{
            transform: "scale(0.75)",
            fill: mode === "dark" ? "rgba(255, 255, 255, 0.4)" : "#282828",
          }}
        />
      </ButtonSearch>
      <Inp
        placeholder="Search City..."
        mode={mode}
        value={cityName}
        onChange={(e) => {
          setCityName(e.target.value);
        }}
      />
    </InputContainer>
  );
};

export default Input;
