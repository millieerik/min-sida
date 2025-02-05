<script>
    import { onMount } from "svelte";
let stringLetter= "RSKEBDOA"
let letters = []
let username = ""
randomizeLetters()
function randomizeLetters(){
    let letters = []

    for (let letters of stringLeter){
        let top = Math.random() *80 
        let left = Math.random() * 80
        letters.push({letter: letter, top:top, left:left})
        letters=letters
    }

}

for (let letters of stringLeter){
    let top = Math.random() *80 
    let left = Math.random() * 80
    letters.push({letter: letter, top:top, left:left})
}

function addletter(index){
    let letter= letters[index]
    username+= letter.letter
    let top = Math.random() *80 
    let left = Math.random() * 80
    letters=letters
}


setInterval(() => {
    let letters = []


    for (let letters of stringLeter){
        let top = Math.random() *80 
        let left = Math.random() * 80
        letters.push({letter: letter, top:top, left:left})
}
}, 2000);

</script>
<section>
{#each letters as {letter, top, left}}
<button on:click={()=> addletter(i)} style= "top:{top}vh; left:{left}vw;" >{letter}</button>
    
{/each}
</section>

<style>

section{

    position: relative;
    background-color: aqua;

}
button{
    position: fixed;
    padding: 1em;
    color: black;
}
</style>