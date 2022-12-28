const cityName = document.getElementById("cityName");
let city_Name = document.getElementById("city_Name");
const submitBtn = document.getElementById("submitBtn");
const temp_status = document.getElementById("temp_status");

const datahide = document.querySelector(".middle_layer");

const temp_real_val = document.getElementById("temp_real_val");
const getInfo =async (event) =>{
    event.preventDefault();
    // alert("hello")
    let cityVal = cityName.value;
    if(cityVal===""){
        city_Name.innerText = "Plz write the Name before you Search"
        datahide.classList.add("data_hide")
    }else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a1c595c6b77986ffda213eafc1f41c73`
            const response = await fetch(url)
            const data =await response.json();
            const arrData = [data]
            // console.log(data)
            datahide.classList.remove("data_hide")

            city_Name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;

            // condition to check sunny or cloudy

            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='clolor : #eccc68;'></i>"
            }else if (tempMood == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='clolor : #f1f2f6;'></i>"
            }else if (tempMood == "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='clolor : #a4b0be;'></i>"
            }else{
                temp_status.innerHTML = "<i class='fas fa-sun' style='clolor : #eccc68;'></i>"
            }

        } catch  {
            city_Name.innerText = "Plz Enter the name Properly"
            datahide.classList.add("data_hide")
        }
       
    }
}
submitBtn.addEventListener("click", getInfo)