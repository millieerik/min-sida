<script>
	import Container from "postcss/lib/container";
    import { fade } from 'svelte/transition';
let varor =[{name:"",kopt:false, number:1}];
let köptvaror=[{name:"Mjölk"}]
let item = ""
let number= 0
function add(){
    if(item == "") return;
    varor.push({name: item})
    varor = varor
}
 
function remove(i){
    varor.splice(i,1)
    varor = varor
}

function addItem(i){
    varor[i].kopt=!varor[i].kopt
    varor=varor

}


function kopigen(i){
   
    varor[i].kopt=!varor[i].kopt
    varor=varor
   
}

function moveupItem(number){
   
    let temp = varor[number]
    varor[number] = varor[number-1]
    varor[number-1] =temp 

    varor=varor
}
function movedownItem(number){
   
   let temp = varor[number]
   varor[number] = varor[number+1]
   varor[number+1] =temp 

   varor=varor
}
</script>
<main>

<div class= container>

 <h1> Shoppinglist</h1>

 <div class= categories_container>
    <section>
        <h2>Varor att köpa</h2>
        <ol>
            {#each varor as vara,i}
            {#if !vara.kopt}
            <li transition:fade >
                { vara.name}
                <button class="remove" on:click={()=>remove(i)}> Ta bort</button>
                <button class="kopigen"on:click={()=>addItem(i)}> Köp</button>
                <input value="↑" type="button" on:click={()=>moveupItem(i)}>
                <input value="↓" type="button" on:click={()=>movedownItem(i)}>
            </li>
            {/if}
            {/each}
        </ol>
    </section>
    <section>
        <h2>Köpta varor</h2>
        <ul>
            {#each varor as vara, i}
            {#if vara.kopt}
            <li transition:fade>
                { vara.name}
                <button class="remove"on:click={()=>remove(i)}> Ta bort</button>
                <button class="kopigen"on:click={()=>kopigen(i)}> Köp igen</button>
            </li>
            {/if}
            {/each}
        </ul>
       
       
    </section>
    

 </div>


 
 <input type="text" bind:value={item}>
 <button on:click={add}>lägg till</button>


</div>
</main>
<style>

.container{
    display: grid;
    grid-template-rows: 1fr 9fr 1fr;
    
    background-color: rgb(0, 153, 255);
    width: 60vw;
    height: 70vh;
    border-radius: 20px;
    
    
}
        
.categories_container{
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
   

    height: 100%;
    background-color: lightblue;
    

}        


.categories_container section:first-child{  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.1) /* svart bakgrund med 10% opacitet */
  }
 
  .categories_container section:last-child{  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.3) /* svart bakgrund med 30% opacitet */
  }

.container h1{
    text-align: center;
    background-color: rgb(127, 208, 255);
    border-radius: 10px;
    align-self: center;
    justify-self: center;
}

.categories_container section{
    width: 100%;
    height: 100%;

}
.categories_container section h2{
    text-align: center;
    align-self: center;
    justify-self: center;
    font-size: 20px;
    background-color: rgb(10, 6, 85);
    border-radius: 8px;
    margin-top: 10px;
}

li{
  
    list-style-type: decimal;
    list-style-position:inside;
    color: black;
    border-bottom: solid 1px white;

   
    
}

input{

    color: black;
    
}
.remove{
    background-color:rgb(139, 215, 241);
    border-radius: 4px;
}

.kopigen{
    background-color: rgb(74, 161, 193);
    border-radius:4px ;
}

</style>