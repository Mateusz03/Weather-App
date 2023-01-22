const tempConvert = (temp) => {
  return Math.round(((temp - 32) * 5) / 9);
};
//farenheit to celcius
export default tempConvert;
