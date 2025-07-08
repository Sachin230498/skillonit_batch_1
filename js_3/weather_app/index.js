let api_key = "0be5cefa77367d7fea0e9652c1cc9677";
let api = "https://api.openweathermap.org/data/2.5/weather";
let city = document.getElementById("city");
let cityname = document.getElementById("cityname");
let temperature = document.getElementById("temp");
let map = document.getElementById("map");

//?q=buldhana&appid=0be5cefa77367d7fea0e9652c1cc9677

const getWeather = async () => {
  let cityvalue = city.value;
  let res = await fetch(`${api}?q=${cityvalue}&appid=${api_key}&units=metric`);
  // console.log(res)
  let data = await res.json();
  console.log(data);
  display(data);
};

const display = ({ name, main: { temp } }) => {
  temperature.innerText = `Temperarture is ${temp}°C `;
  cityname.innerText = `City name is -  ${name}`;
  map.src =
    `https://www.google.com/maps/embed/v1/place?q=${name}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`;
//   console.log(name)
};

// getWeather(api,"akola", api_key);
