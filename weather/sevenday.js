
// let key1 = "744e779d95966e53cb0605e4f7820586";
// async function display(lat, log){

//     let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${log}&exclude=current,hourly,minutely,alerts&units=metric&appid=${key1}`
//     let res = await fetch(`${url}`);
//     let data = await res.json();
//     let day_data = data.daily;
//     displayData(day_data)
//     console.log(day_data);
// }

// function displayData(data){
//     let day = ["Sun", "Mon", "Tue","Wed", "Thu", "Fri", "Sat"];
//     for(let i=0; i<data.length-1; i++){
//         let ele = data[i];
//         let div = document.createElement("div");
//         let temp = document.createElement("h3");
//         temp.innerText = ele.temp.day +'℃';
//         temp.style.fontFamily="sans-serif";
  
//         temp.style.color="white";
//         // temp.style.border = '1px solid red';
//         let img = document.createElement("img");

//         if(ele.temp.day > 35){
//             temp.style.color="red";
//             img.src = "https://cdn.pixabay.com/photo/2013/07/13/12/12/sun-159392__480.png";
//             img.style.width= "80px";
//             img.style.height="80px";
   
//             img.style.position="relative";
//             img.style.zIndex="-1";
//         }   
//         if(ele.temp.day < 35){
//             img.src = "https://cdn.pixabay.com/photo/2016/03/18/15/07/slightly-cloudy-1265204__340.png";
//             img.style.width= "80px";
//             img.style.height="80px";
//             img.style.marginTop="0px";
//             img.style.position="relative";
//             img.style.zIndex="-1";
//             // img.style.border = "1px solid red";
//         }
//         let dayDt = document.createElement("p");
//         dayDt.innerText = day[i];
//         dayDt.style.fontWeight="bolder";
//         dayDt.style.fontFamily="sans-serif";
//         dayDt.style.color="white";

//         let morn = document.createElement("h5");
//         morn.innerText = "Morn"+" "+ele.temp.morn +'℃';
//         morn.style.fontFamily="sans-serif";
//         if(ele.temp.morn>=30){
//             morn.style.color="red";
//         }
//         if(ele.temp.morn<30){
//             morn.style.color="white"; 
//             morn.style.fontWeight="bolder";
//         }

//         let night = document.createElement("h5");
//         night.innerText = "Night"+" "+ele.temp.night +'℃';
//         night.style.fontFamily="sans-serif";
//         night.style.color="white"; 

//        let div0=document.createElement("div");
//        div0.append(dayDt,temp,img)
//         let div1 = document.createElement("div");
//         div1.append(morn, night);
//         // div1.style.border="1px solid red"

//         div1.style.marginTop="-30px";
//         div.append(div0, div1);
//         box1.append(div);
//     };
// }

// const options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
//   };
  
//   function success(pos) {
//     // pos = "mumbai";
//     const crd = pos.coords;
//     let lat = crd.latitude;
//     let log = crd.longitude;
//     console.log(lat, log)
//     display(lat, log);

//   }
  
//   function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
//   }
  
//   navigator.geolocation.getCurrentPosition(success, error, options);
  

//   -------------------------------


async function display() {
    // let key = "0197b72d4fdc61f77775a49831e8dd55";
  let key = "d43e264de36f065dfcf6ea5fcb1ea29d";

    let city = document.querySelector("#city").value;

    try {
  
      let resfor = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${key}&units=metric`
      );

      let datafor = await resfor.json();
      let forData = datafor.list;
      console.log(forData);
      appendData1(forData);
    } catch (err) {
      console.log("Error:", err);
    }
  }


  function appendData1(forData) {
    let containor=document.getElementById("box1")
    containor.innerHTML = null;
    forData.forEach(function (ele, i) {
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");

      let day = document.createElement("h3");
      let date = new Date();
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let n = date.getDay();

      if (n + i >= 7) {
        day.innerText = days[n + i - 7];
      } else {
        day.innerText = days[n + i];
      }

      let imgfor = document.createElement("img");
      imgfor.src = `https://openweathermap.org/img/wn/${ele.weather[0].icon}@2x.png`;
      imgfor.style.margin="-20px"
      // imgfor.src="https://cdn.pixabay.com/photo/2013/07/13/12/12/sun-159392__480.png"
      // imgfor.style.width="35px"
      let tempMax = document.createElement("p");
      tempMax.innerText = `${ele.main.temp_max} ˚C`;
      let tempMin = document.createElement("p");
      tempMin.innerText = `${ele.main.temp_min} ˚C`;
      div2.append(tempMax,tempMin)
      div1.append(day, imgfor, div2);
      containor.append(div1);
    });
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  async function success(pos) {
    const crd = pos.coords;
    let key = "0197b72d4fdc61f77775a49831e8dd55";
    try {
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${key}&units=metric`
      );
      let resfor = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${crd.latitude}&lon=${crd.longitude}&cnt=7&appid=${key}&units=metric`
      );
      let data = await res.json();
      appendData(data);
      let datafor = await resfor.json();
      let forData = datafor.list;
      appendData1(forData);
      console.log(forData);
    } catch (err) {
      console.log("Error2:", err);
    }
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
// console.log(`https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=0197b72d4fdc61f77775a49831e8dd55&units=metric`)
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);


