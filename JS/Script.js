let localidad = document.querySelector('.localidad')
let precipitacion;
let humedad = document.querySelector('.humedad');
let veloViento = document.querySelector('.viento');let descripcion = document.querySelector('.descrip');
let visibilidad = document.querySelector('.visibilidad');
let temperatura = document.querySelector('.temperatura');
let long = document.querySelector('.long');
let lat = document.querySelector('.lat') 

const kelvin = 273.15;
//Cargar posicion actual

    navigator.geolocation.getCurrentPosition((localizacion)=>{
        console.log(localizacion);
        latitud = localizacion.coords.latitude;
        longitud = localizacion.coords.longitude;
    
        //API 
        const APIkey = '816b228858c43a100911167f902fc320';
        const APIurl = 'https://api.openweathermap.org/data/2.5/weather?lat='+latitud+'&lon='+longitud+'&appid='+APIkey;
        
        fetch(APIurl)
        .then((response) =>{
            return response.json();
        })
        .then((data) =>{
            console.log('Datos obtenidos son:');
            console.log(data)

            //Valor a las variables
            localidad.textContent = data.name + ', ' + data.sys.country;

            humedad.textContent = data.main.humidity+'%';

            veloViento.textContent = data.wind.speed+' Km/h';
                    
            temperatura.textContent = Math.floor(data.main.temp - kelvin) + '°C';
        
            descripcion.textContent = data.weather[0].description;
            
            visibilidad.textContent = data.visibility + ' m'

            long.textContent =  data.coord.lon;  
            
            lat.textContent = data.coord.lat;
        })
    }) 
        