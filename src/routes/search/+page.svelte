 
<script>
    import { goto } from "$app/navigation";
    var search= ""
</script>

<form on:submit|preventDefault={()=> goto('/search/'+search)}>
    <input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
  </form>
                   

<style>

input{
    color: blue;
    border: 4px solid black;
    border-radius: 4px;

}
</style>