let api_key = "0be5cefa77367d7fea0e9652c1cc9677";
let api = "https://api.openweathermap.org/data/2.5/weather";
let cityinput = document.getElementById("city");
let cityname = document.getElementById("cityname");
let temperature = document.getElementById("temp");
let map = document.querySelector("iframe")

const getWeather = async () => {
  let x = cityinput.value;
  let res = await fetch(`${api}?q=${x}&appid=${api_key}&units=metric`);
  let data = await res.json()
  // console.log(data)
  display(data)
};

const display = ({main:{temp},name})=>{
  // console.log(weatherdata.main.temp)
  // console.log(weatherdata.name)
  // temperature.innerText = "Temperature is :- " + weatherdata.main.temp;
  // cityname.innerText ="City name is :-" + weatherdata.name
  temperature.innerText = `Temperature is :- ${temp}`;
  cityname.innerText ="City name is :-" + name
  map.src=`https://www.google.com/maps/embed/v1/place?q=${name}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`
  

}
