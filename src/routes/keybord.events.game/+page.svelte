<script>
    import {onMount} from 'svelte';
let ordlista = [];
let slumpatOrd="";
async function load() {
    try {
      const response = await fetch("/wordlist.txt");
      if (!response.ok) {
        throw new Error(`Failed to fetch wordlist: ${response.status}`);
      }
      const text = await response.text();
      ordlista = text.split('\n').filter(word => word.trim());
      slumpaOrd(); 
    } catch (error) {
      console.error("Error loading word list:", error);
    }
  }

  function slumpaOrd() {
    if (ordlista.length > 0) {
      const index = Math.floor(Math.random() * ordlista.length);
      slumpatOrd = ordlista[index];
    }
  }


onMount(() => {
    load()
});







let top = 50;
let left = 280;
	
	
function onKeyDown(e) {
		 switch(e.keyCode) {
			 case 38:
				 top -= 5;
				 break;
			 case 40:
				 top += 5;
				 break;
			 case 37:
				 left -= 5;
				 break;
			 case 39:
				 left += 5;
				 break;
            
		 }
}
	
</script>

<button on:click={slumpaOrd}>******</button>
<p>Slumpat ord: {slumpatOrd}</p>


<main>
	<div style="left: {left}px; top: {top}px">
	</div>
</main>

<svelte:window on:keydown|preventDefault={onKeyDown} />


<style>

    .slumpatOrd{
        color: black;


    }
	main {
        position: relative;
		width: 600px;
		height: 500px;
		border: solid rgb(0, 0, 0) 1px;
        border-radius: 50%;
		margin: 10px auto;
		position: relative;
        
        
	}
	div {
        
		width: 25px;
		height: 25px;
		background-color: rgb(71, 112, 118);
        border-radius: 50%;
		position: absolute;
        
	}

#randomword{
    color: black;
    width: 10px;
    height: 10px;
}
</style>



