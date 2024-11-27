<script>
	import { base } from "$app/paths";

    let color= "black"
    let email=""
    let name= ""
    let password= ""
    let colors= [{name:"Rosa", value:"Pink"}, {name:"Röd", value: "red"}, {name:"Orange", value: "orange"}]
    const handleSubmit=()=> {

let new_user = {username: name, password: password, email: email, color: color};


let allreadyusedemail=users.filter(user => user.email==email)

if (allreadyusedemail.length==0){
  users = [...users, new_user];
$users_store = JSON.stringify(users);  
alert("Välkommen " +  name + " med email " + email + " med lösenord " + password +" och favoritfärgen " + color)

}
else 
alert ("Mailen är redan andvänd")
}


import {users_store} from "$lib/user";
let users = [];


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
    <h1>Register</h1>
    <div style="width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color};"></div>
    <form on:submit|preventDefault={handleSubmit}>
       
        <label for="name">Namn:</label>
        <input type="text" id="name"  bind:value={name}>
        <label for="mail">Mail</label>
        <input type="email" id="email" bind:value={email}>
        <label for="password">Lösenord</label>
        <input type="password" id="password"bind:value={password}>
        
            <label for="Favoritfärg"> Favoritfärg</label>
            <select bind:value={color} name="Favoritfärg" id="text">
                <option value="blue">Blå</option>
               {#each colors as c}
                <option value={c.value}>{c.name}</option>
                {/each}

            </select>
        <input id="submit" type="submit" value="Registera" > 
    </form>
    <p>Har du redan ett konto? <a href="{base}/login">Logga in</a></p>
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
        width: 50%;
        height: 80%;
        background-color: #3a2e3b;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        min-width: 300px;
        min-height: 500px;
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

.text{
    
  
}

a{
    text-decoration: underline;
    color: pink;
}

select {
    color: black;
}
   
   
</style>
