import {
  AppContainer,
  Header,
  Main,
  Navigation,
} from "./components/imports.js";
import { createContext, useState } from "react";

export const ModeContext = createContext();

function App() {
  const [mode, setMode] = useState("dark");
  const [timeForecast, setTimeForecast] = useState("Next 16 days");
  const [weather, setWeather] = useState();
  const [selectedDay, setDay] = useState(0);
  const [move, setMove] = useState(0);
  const [loader, setLoader] = useState(false);
  return (
    <ModeContext.Provider
      value={{
        mode,
        setMode,
        timeForecast,
        setTimeForecast,
        weather,
        setWeather,
        selectedDay,
        setDay,
        move,
        setMove,
        loader,
        setLoader,
      }}
    >
      <AppContainer mode={mode}>
        <Header />
        <Navigation />
        <Main />
      </AppContainer>
    </ModeContext.Provider>
  );
}

export default App;
