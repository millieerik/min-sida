 
<script>
    import { goto } from "$app/navigation";
    import {base} from "$app/paths"
    var search= ""
</script>

<form on:submit|preventDefault={()=> goto(base+'/search/'+search)}>
    <input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
  </form>
                   

<style>

input{
    color: blue;
    border: 4px solid black;
    border-radius: 4px;

}
</style>