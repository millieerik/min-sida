<script>
    import ElizaBot from "elizabot";
    import { enhance } from "$app/forms";
    import { writable } from "svelte/store";
    const eliza = new ElizaBot();

let storedChat = [];
    if (typeof window !== 'undefined'){
        storedChat = JSON.parse(localStorage.getItem('chat'))|| [
            {user: 'Eliza', message: 'Hello! How can I assist you today'},
        ];
    }    

    const chatStore = writable(storedChat)

    if (typeof window !== 'undefined'){
        chatStore.subscribe((value) => {
                localStorage.setItem('chat', JSON.stringify(value))
        });
    }


    let chat = storedChat;
        chatStore.subscribe((value) => {
         chat = value;
            
    });
   
    function reset(){
        localStorage.clear()
        chatStore.update((current) => [{user: 'Eliza', message: 'Hello! How can I assist you today?'}])
    }
    
 async function write(message) {
    chatStore.update((current) => [...current, {user: 'Me', message}])

    
    var element = document.getElementById("visible");
//Ändrar elementets CSS-egenskap display till default
    element.style.display = "flex"; // Visa elementet
            
    // random delay for Eliza's response time
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));

    element.style.display = "none";
    //TODO: Add Eliza's response to the chat
   chatStore.update((current) => [...current, {user: "Eliza", message: eliza.transform(message)}])
  }
                
</script>

<main>
    <section>
        {#each chat as c}
        
        <article class= {c.user}><p>{c.user}: {c.message}</p></article>
        {/each}
        <article id="visible" >
            <span class="circle"></span>
            <span class="circle"></span>
            <span class="circle"></span>
        </article>
    <form method="post"
    use:enhance={({ formElement, formData, action, cancel }) => {
      cancel(); //don't post anything to server
      const text = formData.get("text"); // what does "text" refer to?
      write(text);

        formElement.reset() 
      }}> 
        <input type="text" name="text"  >
        </form>
        <button on:click={()=> reset()}>Reset</button>
    </section>

</main>


<style>


main{
    height: 70vh;
    width: 60vw;
    padding: 19px;
    margin:auto;
    background-color: rgb(75, 209, 166);
    border-radius: 10px;
    
}
section {
    height: 90%;
    overflow-y: scroll;
}

article, input{
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: rgb(127, 62, 189);
    border: 90%;
    
}

input{
    color: black;
}

.circle{
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: white;
    animation-duration: 1s;
    animation-name: typing;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    margin:auto;
    
}

@keyframes typing{
    0%{transform:scale(1)}
    25%{transform:scale(1)}
    50%{transform: scale(1.4);}
    100%{transform: scale(1);}
}

.animation{
    animation-name: typing;
    animation-duration: 3s; 
    animation-timing-function: ease-in-out;
}

#visible{
    height: 60px;
    width: 100px;
    display: none;
    justify-content: center;
    align-items: center;
}



/* CSS-stilar för .circle med index 1 (den första cirkeln) */
.circle:nth-child(1) {
     animation-delay: 0ms; /* Ingen fördröjning */
}
 /* CSS-stilar för .circle med index 2 (den andra cirkeln) */
.circle:nth-child(2) {
     animation-delay: 333ms; /* Starta animationen efter 333 millisekunder (ms) */
}
            /* CSS-stilar för .circle med index 3 (den tredje cirkeln) */
.circle:nth-child(3) {
     animation-delay: 666ms; /* Starta animationen efter 666 ms */
}
   
.Me {
    background-color: rgb(50, 86, 86);
    margin-left: 35px;
}
</style>