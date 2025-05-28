<script lang="ts">
let datum
let datum2
let averageTemp = []
let highestTempDestination = { name: '', totalTemp: -Infinity };
let highestTempDestinations = [];
let rhodosbild="https://www.greekboston.com/wp-content/uploads/2016/05/Lindos-Beach-3.jpg"
let splitbild="https://wallpaperaccess.com/full/3816936.jpg"
let ayianapabild ="https://www.dinreise.no/wp-content/uploads/2022/10/shutterstock_2181457389-scaled.jpg"
let palmabild="https://www.zafirohotels.com/content/imgsxml/galerias/blog/265/calamajorplayapalma871.jpg"
let nicebild="https://beefbar.com/wp-content/uploads/2024/03/nice-french-riviera.jpg"
let barcelonabild="https://www.gamintraveler.com/wp-content/uploads/2021/06/Bogatell-Beach-Barcelona-2048x1108.jpg"
	import { onMount } from 'svelte';
	import { fetchWeatherApi } from 'openmeteo';

    function getDestinationImage(destinationName: string): string {
    if (destinationName === "Barcelona") return barcelonabild;
    if (destinationName === "Nice") return nicebild;
    if (destinationName === "Palma") return palmabild;
    if (destinationName === "Split") return splitbild;
    if (destinationName === "Rohodos") return rhodosbild;
    if (destinationName === "AyiaNapa") return ayianapabild;
    return 'https://via.placeholder.com/600x400?text=No+Image+Available';
}
    const params = {
        "latitude": 41.39,
        "longitude": 2.16,
        "start_date": "2010-06-01",
        "end_date": "2010-06-10",
        "daily": ["temperature_2m_max", "temperature_2m_mean"],
        "timezone": "GMT"
    }; 


    let destinations = [{name:"Barcelona",lat:41.39,long:2.16, weatherData: null, averageTemp: []},
                        {name:"Nice",lat:43.70,long: 7.26, weatherData: null, averageTemp: []},
                        {name:"Palma",lat:39.56,long:2.64, weatherData: null, averageTemp: []},
                        {name:"Split",lat:43.51,long:16.44, weatherData: null, averageTemp: []},
                        {name:"Rohodos",lat:36.44,long:28.22, weatherData: null, averageTemp: []},
                        {name:"AyiaNapa",lat:34.99,long:33.99, weatherData: null, averageTemp: []}]

    let weatherData

    async function medeltemp(year, month, day,destination){

        async function getTemp(year, month, day, destination) {
            const params = {
            "latitude": destination.lat,
            "longitude": destination.long,
            "start_date": `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
            "end_date": `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
            "daily": ["temperature_2m_max"],
            "timezone": "GMT"
            };

            const url = "https://archive-api.open-meteo.com/v1/archive";
            const responses = await fetchWeatherApi(url,params);

            

           
            
       
        const range = (start: number, stop: number, step: number) =>
            Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

        
        const response = responses[0];

        
        const utcOffsetSeconds = response.utcOffsetSeconds();

        const daily = response.daily()!;

        
            weatherData = {
                daily: {
                    time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
                        (t) => new Date((t + utcOffsetSeconds) * 1000)
                    ),
                    temperature2mMax: daily.variables(0)!.valuesArray()!.map(value => Math.trunc(value)),
                },
            };
            return weatherData.daily.temperature2mMax[0]
        
        }
        let temp = 0;

        for (let a=0; a<1; a++){
            temp += await getTemp(year-a, month, day, destination);
        }

        return temp/10;
            
    }


    function ny(){
        params.start_date=datum
        params.end_date=datum2
        
    setupAll();
   }
    async function setup(destination) {
        averageTemp = [] 
        console.log("setup")
        params.latitude=destination.lat
        params.longitude=destination.long
        console.log("start: "+ params.start_date.split("-"))
        console.log("end: "+ params.end_date.split("-"))
        const start = new Date(params.start_date);
        const end = new Date(params.end_date);

        for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
        averageTemp.push(await medeltemp(date.getFullYear(), date.getMonth() + 1, date.getDate(),destination));
        console.log("averageTemp: "+ averageTemp)
        }
        destination.averageTemp = averageTemp; 
    const url = "https://archive-api.open-meteo.com/v1/archive";
    const responses = await fetchWeatherApi(url,params);

 
const range = (start: number, stop: number, step: number) =>
	Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);


const response = responses[0];


const utcOffsetSeconds = response.utcOffsetSeconds();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const latitude = response.latitude();
const longitude = response.longitude();

const daily = response.daily()!;


weatherData = {
    daily: {
        time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
            (t) => new Date((t + utcOffsetSeconds) * 1000)
        ),
        temperature2mMax: daily.variables(0)!.valuesArray()!.map(value => Math.trunc(value)),
        temperature2mMean: daily.variables(1)!.valuesArray()!.map(value => Math.trunc(value)),
        daylightDuration: daily.variables(2)!.valuesArray()!,
    },
};



    destination.weatherData = weatherData; 

    destinations=destinations
    }


    async function setupAll() {
        for (let i = 0; i < destinations.length; i++) {
            const destination = destinations[i];
            await setup(destination); 
        }
        destinations = [...destinations]; 
        console.log("Updated destinations:", destinations);
        calculateHighestTempDestination(); 
    }

function calculateHighestTempDestination() {
    highestTempDestination = destinations.reduce((max, destination) => {
        const totalTemp = destination.weatherData?.daily.temperature2mMax.reduce((sum, temp) => sum + temp, 0) || 0;
        return totalTemp > max.totalTemp ? { name: destination.name, totalTemp } : max;
    }, { name: '', totalTemp: -Infinity });

    const maxTemp = highestTempDestination.totalTemp;
    highestTempDestinations = destinations.filter(destination => {
        const totalTemp = destination.weatherData?.daily.temperature2mMax.reduce((sum, temp) => sum + temp, 0) || 0;
        return totalTemp === maxTemp;
    });
}

// onMount(()=>{setup(); })



    
</script>



<main>
    <section>
    <button id="byt" on:click={ny}> Sök datum</button>
    <h1>Välj datum för att se varmaste destinationen</h1>
    <div>
       <label id="kalender" for="kalender"> Från:</label>
       <input type="date" id="date" bind:value={datum} min='2020-01-01' max='2024-12-31'>
    </div>
    <label id="kalender" for="kalender" > Till:</label>
       <input type="date" id="date" bind:value={datum2} min='2020-01-01' max='2024-12-31'>
       <button on:click={()=>{
    params.end_date= "2024"+datum2.toString().substr(4);
    setupAll()


       }}> </button>
       
    </section>
    {#each destinations as destination}
    <div>
        
       
    </div>
{/each}

<section>
    {#if highestTempDestinations.length > 0}
       <p>destinationen med högst temperatur</p>
        {#each highestTempDestinations as destination}
            <div style="margin-bottom: 20px;">
                <p style="color: black;">
                    {destination.name}: 
                    {(destination.weatherData.daily.temperature2mMax.reduce((sum, temp) => sum + temp, 0) / destination.weatherData.daily.temperature2mMax.length).toFixed(1)}°C
                </p>
                <a href="/Weather.{destination.name}"><img 
                    src={getDestinationImage(destination.name)} 
                    alt={destination.name} 
                    
                /></a>
                
            </div>
        {/each}
    {:else}
        <p style="color: black; text-aling:center;">Väntar på varmaste destination</p>
    {/if}
</section>
  
</main>



<style>
h1 {
    text-align: center;
    color: black;
    font-size: 15px;
    font-weight: lighter;
    margin-top: 20px;
}

img {
    display: block;
    margin: 0 auto; 
    width: 65%;
    height: auto;
    border-radius: 25px;
    margin-top: 50px;
    margin-bottom: 50px;
}
#date{
 color:black;
    background-color: pink;
    border-radius: 5px;
    padding: 5px;
    margin-left: 50px;
    margin-right: 50px;
    box-shadow: 0px 8px 20px rgba(0,0,0,0.5);
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    
    border: 2px solid black;
    transition: all 0.3s ease-in-out;
    margin-bottom: 275px;
    &:hover {
        background-color: lightblue;
        transform: scale(1.05);
        box-shadow: 0px 12px 30px rgba(0,0,0,0.7);
    }
    
}

#byt{
    color: rgb(211, 214, 220);
    background-color: rgb(15, 188, 219);
    border-radius: 5px;
    padding: 5px;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 20px;
    width: 90%;
    border: 2px solid black;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: lightblue;
        transform: scale(1.05);
        box-shadow: 0px 12px 30px rgba(0,0,0,0.7);
        color: black;
    }
}
#kalender{
   color: rgb(255, 255, 255);
   background-color: rgb(110, 179, 191);
   width: 100px;
    height: 30px;
    border-radius: 5px;
    padding: 5px;
    margin: 10px;
    box-shadow: 0px 8px 20px rgba(0,0,0,0.3);
    
    
    
}
section{
    background-color: aliceblue;
   height: 100vh;
   width: 50vh;
   border: 10px solid rgb(181, 175, 175);
   color: black;
}

#date {
    color: black;
}

#kalender {
    color: black;
    background-color: white;
    border-radius: 5px;
    padding: 5px;
    margin-left: 10px;
    margin-right: 10px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);
}

main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 10px;
    background-color: antiquewhite;
}

p{
    color: black;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
}
</style>