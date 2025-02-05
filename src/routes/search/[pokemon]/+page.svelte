
<script>
    /** @type {import('./$types').PageData} */
    export let data;
  </script>
  
  {#await data}
    <p>.. waiting</p>
  {:then pokemon} 
  <article>
    {#each Object.entries(pokemon.response.sprites) as sprites}
      {#if typeof sprites[1] == "string"}
      <img src={sprites[1]} />
      {/if}
    {/each}
  </article>
  <h1>{pokemon.response.name}</h1>
    <h2> höjd: {pokemon.response.height}</h2>
    <h3>vikt: {pokemon.response.weight}</h3>
   
  <section>
    {#each pokemon.response.abilities as abs}
    <p>{abs.ability.name}</p>      
    {/each}
  
  </section>
  
  {/await}  
  
  
<style>
    article{
        display: flex;
        height: 30%;
        width: 90%;
        gap: 1em;
    }

    h1{
        color: black;
 
    }

    h2{
        color: black;
        
    }

    h3{
        color: black;
    }

    p{
        color: black;
    }
</style>