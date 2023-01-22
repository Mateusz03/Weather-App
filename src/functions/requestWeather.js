import axios from "axios";

const RequestWeather = async (cityName) => {
  const options = {
    method: "GET",
    url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
    params: {
      aggregateHours: "24",
      location: cityName,
      contentType: "json",
      shortColumnNames: "0",
      lang: "id",
    },
    headers: {
      "X-RapidAPI-Key": "de219c776emsh3f48abaa7cf437ep100c75jsn6f25d32e6191",
      "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
    },
  };

  let parameters = [];

  await axios
    .request(options)
    .then(function (response) {
      parameters = Object.values(response.data.locations);
    })
    .catch(function (error) {
      console.error(error);
    });
  return parameters[0];
};

export default RequestWeather;
