<script>
import {onMount} from 'svelte';
let stringLetters="qwertyuiopåasdfghjklöäzxcvbnm"

let mittord=""
let letters= []
let matchwords=""
let addletter=""


randomLetters()
function randomLetters(){
    
    letters =[]
    for (let letter of stringLetters){
        let top = Math.random()*550+100
        let left = Math.random()*460+540
        letters.push({letter:letter,top:top,left:left})
    }
    letters=letters
}

setInterval(randomLetters, 6000);

    
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
      mittord=""
    }
  }


onMount(() => {
    load()
});







let top = 150;
let left = 750;
	
	
function onKeyDown(e) {
		 switch(e.keyCode) {
      case 32:
        checkPosition()
        break;
			 case 38:
				 top -= 15;
				 break;
			 case 40:
				 top += 15;
				 break;
			 case 37:
				 left -= 15;
				 break;
			 case 39:
				 left += 15;
				 break;
            
		 }
}


function checkPosition(){
        
        letters.forEach((position) => {
            let topL = position.top;
            let leftL = position.left;
            let letter = position.letter;
            console.log(Math.abs(topL-(top+25))<25 && Math.abs(leftL-(left+25))<25)
            if (Math.abs(topL-(top))<15 && Math.abs(leftL-(left))<15 ){

                mittord+=letter;
                
            }
        })
    }


	
</script>



    

<button on:click={slumpaOrd}>Slumpa Här: ⟲</button>
<br>
<p>Slumpat ord: {slumpatOrd}</p>
<p>Mitt ord: {mittord}</p>


<main>
	<div style="left: {left}px; top: {top}px">
    <section>

      {#each letters as {letter,top,left},i }
        <button class="letter" on:click={()=>addLetter(i)} style="top:{top}px; left:{left}px;">{letter}</button>
      {/each}
  </section>
	</div>
</main>



<svelte:window on:keydown|preventDefault={onKeyDown} />

<style>

  
main {
    position: relative;
		width: 500px;
		height: 600px;
		border: solid rgb(0, 0, 0) 4px;
    border-radius: 10%;
		margin: 10px auto;
		
        
        
	}
	div {
        
		width: 25px;
		height: 25px;
		background-color: rgb(71, 112, 118);
    border-radius: 90%;
		position: fixed;

        
	}

    button{
        position: fixed;
    }





</style>



