<script>
    let color= "black"
    let email=""
    let name= ""
    let password= ""
    let colors= [{name:"Rosa", value:"Pink"}, {name:"Röd", value: "red"}, {name:"Orange", value: "orange"}]
    const handleSubmit=()=> {

        let wrongpassword=users.filter(user => user.email==email && user.password==password)

        if (wrongpassword.length> 0 ){
       
            alert("Välkommen tillbaks " + wrongpassword[0].username)
        }
        else{
            alert("fel lösenord")}
        }


import {users_store} from "$lib/user";
let users = [];

import { base } from '$app/paths';
import { onMount } from 'svelte';
onMount(() => {
    /*Check if has more then 2 characters*/
    if($users_store.length > 2){
        users = JSON.parse($users_store);
    }
});


</script>
<main>

<div class="container">
    <h1>Inloggning</h1>

    <form on:submit|preventDefault={handleSubmit}>
       

        <label for="mail">Mail</label>
        <input type="email" id="email" bind:value={email}>
        <label for="password">Lösenord</label>
        <input type="password" id="password"bind:value={password}>
        <input type="submit" id="submit" value="Logga in" > 

    </form>
    <p>Behöver du skapa ett konto? <a href="{base}/register">Registera</a></p>
    </div>
 
</main>
<style>
 main{
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
        min-height: 500px;
        min-width: 500px;
        
    }
.container{
        border: solid 5px rosybrown;
        border-radius: 10px;
        width: 15%;
        height: 30%;
        background-color: #3a2e3b;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        min-width: 350px;
        min-height: 300px;
        
}  

input{
    color: black;
}
#submit {
    color: white;
    padding: 8px;
    border: solid 3px black;
    background-color: gray;
}

#submit:hover {
    background-color: pink;
}
#submit:active {
    background-color: pink
}

a{
    text-decoration: underline;
    color: pink;
}


.text{
    
  
}
   
   
</style>
