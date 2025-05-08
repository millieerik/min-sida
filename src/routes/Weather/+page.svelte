<script lang="ts">
let datum
let datum2
let averageTemp = []

	import { onMount } from 'svelte';
	import { fetchWeatherApi } from 'openmeteo';

    const params = {
        "latitude": 41.39,
        "longitude": 2.16,
        "start_date": "2010-06-01",
        "end_date": "2010-06-10",
        "daily": ["temperature_2m_max", "temperature_2m_mean"],
        "timezone": "GMT"
    };


    let destinations = [{name:"Barcelona",lat:41.39,long:2.16},{name:"Palma", lat:39.56 , long:2.64} ]

    let weatherData

    async function medeltemp(year, month, day){

        async function getTemp(year, month, day) {
            const params = {
            "latitude": 34.99,
            "longitude": 33.99,
            "start_date": `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
            "end_date": `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
            "daily": ["temperature_2m_max"],
            "timezone": "GMT"
            };

            const url = "https://archive-api.open-meteo.com/v1/archive";
            const responses = await fetchWeatherApi(url,params);

            // Helper function to form time ranges

            // Process first location. Add a for-loop for multiple locations or weather models
            
        // Helper function to form time ranges
        const range = (start: number, stop: number, step: number) =>
            Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

        // Process first location. Add a for-loop for multiple locations or weather models
        const response = responses[0];

        // Attributes for timezone and location
        const utcOffsetSeconds = response.utcOffsetSeconds();

        const daily = response.daily()!;

        // Note: The order of weather variables in the URL query and the indices below need to match!
        // Modify the temperature values to remove all decimals
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

        for (let a=0; a<10; a++){
            temp += await getTemp(year-a, month, day);
        }

        return temp/10;
            
    }


    function ny(){
        params.start_date=datum
        params.end_date=datum2
        
    setupAll();
   }
    async function setup(destination) {
        averageTemp = [] // Reset the averageTemp array for each new setup call
        console.log("setup")
        params.latitude=destination.lat
        params.longitude=destination.long
        console.log("start: "+ params.start_date.split("-"))
        console.log("end: "+ params.end_date.split("-"))
        const start = new Date(params.start_date);
        const end = new Date(params.end_date);

        for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
        averageTemp.push(await medeltemp(date.getFullYear(), date.getMonth() + 1, date.getDate()));
        console.log("averageTemp: "+ averageTemp)
        }
        destination.averageTemp = averageTemp; // Store the average temperature in the destination object
    const url = "https://archive-api.open-meteo.com/v1/archive";
    const responses = await fetchWeatherApi(url,params);

    // Helper function to form time ranges

    // Process first location. Add a for-loop for multiple locations or weather models
    
// Helper function to form time ranges
const range = (start: number, stop: number, step: number) =>
	Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const utcOffsetSeconds = response.utcOffsetSeconds();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const latitude = response.latitude();
const longitude = response.longitude();

const daily = response.daily()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
// Modify the temperature values to remove all decimals
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


// `weatherData` now contains a simple structure with arrays for datetime and weather data
/*for (let i = 0; i < weatherData.daily.time.length; i++) {
	console.log(
		weatherData.daily.time[i].toISOString(),
		weatherData.daily.temperature2mMax[i],
		weatherData.daily.temperature2mMean[i],
        weatherData.daily.daylightDuration[i]
	);
    
}*/
    destination.weatherData = weatherData; // Store the weather data in the destination object

    destinations=destinations
    }


    async function setupAll() {
        for (let i = 0; i < destinations.length; i++) {
            const destination = destinations[i];
           
            setup(destination);
          
        }
        destinations=destinations
    }

// onMount(()=>{setup(); })



    
</script>



<main>
    <section>
    <button id="byt" on:click={ny}>Byt</button>
    <div>
       <label id="kalender" for="kalender"> Startdatum:</label>
       <input type="date" id="date" bind:value={datum} min='2020-01-01' max='2024-12-31'>
    </div>
    <label id="kalender" for="kalender" > Slutdatum:</label>
       <input type="date" id="date" bind:value={datum2} min='2020-01-01' max='2024-12-31'>
       <button on:click={()=>{
    params.end_date= "2024"+datum2.toString().substr(4);
    setupAll()


       }}> </button>
       
    </section>
    {#each destinations as {weatherData,averageTemp,name}}
   
   
    <div>
        <h3>{name}</h3>
        {#if weatherData && averageTemp.length === weatherData.daily.time.length}
            {#each weatherData.daily.time as time, i}
                <p>{time.toISOString().split('T')[0]}: {weatherData.daily.temperature2mMax[i]}°C</p>
                <p>10-Year Average: {averageTemp[i]}°C</p>
            {/each}
        {:else}
            <p>Loading temperature data...</p>
        {/if}
    </div>
    
        {/each}
    <section>

    </section>
</main>
<!-- svelte-ignore missing-declaration -->


<style>
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
   height: 97vh;
   width: 50vh;
   border: 10px solid rgb(181, 175, 175);
   
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
}

</style>