
  let key = "d43e264de36f065dfcf6ea5fcb1ea29d";

  let map=document.getElementById("gmap_canvas")

  // let data;

  async function getWeather() {
    try {
      let city = document.getElementById("city").value;

      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city} &appid=${key}&units=metric`
      )
    // let forecast=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=38.7267&lon=-9.1403&exclude=current,hourly,minutely,alerts&units=metric&appid=${key}`)

      data = await res.json();
    //   fordata=await forecast.json();
      console.log(data);
    //   console.log(fordata)
    

      appendData(data);
    } catch (err) {
      console.log(err);
    }
  }
  getWeather();

 
      // console.log()

//   function appendData(data) {
//     // if i want only city at a time i ll make it to null
//     let cont=document.getElementById("cont")
//     cont.innerHTML="";
// // 


//     let name = document.createElement("p");
//     name.innerText = `Place:  ${data.name}`;

//     let temp = document.createElement("p");
//     temp.innerText = `Temp:  ${data.main.temp}`;

//     let mintemp = document.createElement("p");
//     mintemp.innerText = `Min Temp:    ${data.main.temp_min}`;

//     let maxtemp = document.createElement("p");
//    maxtemp.innerText = `Max Temp:   ${data.main.temp_max}`;

//     let sunrise = document.createElement("p");
//     sunrise.innerText = `Sunrise:   ${data.sys.sunrise}`;

//     let sunset = document.createElement("p");
//     sunset.innerText = `Sunset:   ${data.sys.sunset}`;

    
//     let weather = document.createElement("p");
//     weather.innerText = `Weather:   ${data.weather[0].main}`;

    


//     let humidity = document.createElement("p");
//     humidity.innerText = `Humidity:   ${data.main.humidity}`;

//     let pressure = document.createElement("p");
//     pressure.innerText = `Pressure:   ${data.main.pressure}`;


//     cont.append(name, temp,mintemp,maxtemp,sunrise,sunset,weather, humidity, pressure);


//     // appening the map
//    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

//   }



  function appendData(data){

    let cont=document.getElementById("cont")
    cont.innerHTML="";


    let Name = document.createElement("h3");
    Name.innerText = `${data.name}`;
    Name.style.color = "black";
    Name.style.fontSize="35px"
    let country = document.createElement("h3");
    country.innerText = `${data.sys.country}`;
    country.style.color = "coral";
    country.style.fontSize="40px";
    country.style.marginTop="-20px";
    let temp = document.createElement("p");
    temp.innerText = `${data.main.temp}℃`;
    temp.style.fontSize="40px";
    temp.style.marginTop="-30px";

    let min_temp = document.createElement("p");
    min_temp.innerText = `Min-Temp: ${data.main.temp_min}`
    let max_temp = document.createElement("p");
    max_temp.innerText = `Max-Temp: ${data.main.temp_max}`

    let feel = document.createElement("h4");
    feel.innerText=`Feels like ${data.main.feels_like}℃. Scattered clouds. Gentle Breeze`;
    feel.style.marginTop="-20px";

    let humid = document.createElement("p");
    humid.innerText=`Humidity: ${data.main.humidity}%`;
    let pressure = document.createElement("p");
    pressure.innerText = `Pressure: ${data.main.pressure}hPa`;
    
    let sunrise = document.createElement("p");
    sunrise.innerText = `Sunrise: ${data.sys.sunrise}`;
    
    let sunset = document.createElement("p");
    sunset.innerText = `Sunset: ${data.sys.sunset}`;

    let visibility = document.createElement("p");
    visibility.innerText = `Visbility: ${data.visibility}`;

    let wind = document.createElement("p");
    wind.innerText = `Wind: ${data.wind.speed}`;

    let div0 = document.createElement("div");
    let div1 = document.createElement("div");
    div1.setAttribute("id", "sun");
    div1.append(min_temp, max_temp, sunrise, sunset);
    
    let div2 = document.createElement("div");
    div2.append(humid, pressure, visibility);
    div2.style.marginLeft="30px";

    let div3 = document.createElement("div");
    div3.append(div1, div2);
    div3.style.display="flex";
    // div3.style.marginTop="-20px";
    div0.append(Name,country,temp,feel)

    cont.append(div0, div3);

    // appending map

    let map = document.getElementById("gmap_canvas");
    map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
}

