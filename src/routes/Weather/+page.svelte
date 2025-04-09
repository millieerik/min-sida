
<script lang="ts">
let datum

	import { onMount } from 'svelte';
	import { fetchWeatherApi } from 'openmeteo';

    const params = {
        "latitude": 34.99,
        "longitude": 33.99,
        "start_date": "2024-06-01",
        "end_date": "2024-06-10",
        "daily": ["temperature_2m_max", "temperature_2m_mean"],
        "timezone": "GMT"
    };


    let weatherData


    async function setup() {
 
    

    const url = "https://archive-api.open-meteo.com/v1/archive";
    const responses = await fetchWeatherApi(url,params);

    console.log(responses)
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
weatherData = {

								daily: {
		time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
			(t) => new Date((t + utcOffsetSeconds) * 1000)
		),
		temperature2mMax: daily.variables(0)!.valuesArray()!,
		temperature2mMean: daily.variables(1)!.valuesArray()!,
        daylightDuration: daily.variables(2)!.valuesArray()!,
	},

};

// `weatherData` now contains a simple structure with arrays for datetime and weather data
for (let i = 0; i < weatherData.daily.time.length; i++) {
	console.log(
		weatherData.daily.time[i].toISOString(),
		weatherData.daily.temperature2mMax[i],
		weatherData.daily.temperature2mMean[i],
        weatherData.daily.daylightDuration[i]
	);
    
}
    }

onMount(()=>{setup(); })

function temperatur() {
   
}


    
</script>



<main>
    <div>
       <label for="kalender" > kalender</label>
       <input type="date" id="date" bind:value={datum} min='2020-01-01' max='2024-12-31'>
       <button on:click={()=>{
params.start_date= "2024"+datum.toString().substr(4);
setup()


       }}>ny </button>
    </div>

</main>
<!-- svelte-ignore missing-declaration -->



{#if weatherData}


    {#each weatherData.daily.time as time,i}

    <p>{time}:  {weatherData.daily.temperature2mMax[i]}C</p>

    {/each}

{/if}

<style>
#date{
 color:black;
}
</style>