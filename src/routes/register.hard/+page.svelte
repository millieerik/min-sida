<script>
	import { base } from "$app/paths";

    let color= "black"
    let email=""
    let name= ""
    let password= ""
    let nummer= 0
    let tal= 1
    
    const handleSubmit=()=> {

let new_user = {username: name, password: password, email: email, year: year, month: month, day:day};


let allreadyusedemail=users.filter(user => user.email==email)

if (allreadyusedemail.length==0){
    if (!name || !email || !password || !year || !month || !day) {
        alert("Registreringen är inte fulständig")
        return;
    }
  users = [...users, new_user];
$users_store = JSON.stringify(users);  
alert("Grattis du lyckades registrera dig" )

}
else 

alert ("Mailen är redan andvänd")
}


import {users_store} from "$lib/user";
	import { Input } from "postcss";
let users = [];


import { onMount } from 'svelte';

onMount(() => {
    document.getElementById("redo").style.visibility = "hidden"
    document.getElementById("information").style.visibility ="hidden"
    document.getElementById("reset").style.visibility ="hidden"
    /*Check if has more then 2 characters*/
    if($users_store.length > 2){
        users = JSON.parse($users_store);
    }
});
$: {
if (!name=="" && !email=="" && !password=="" && !year==0 && !month==0 && !day==0){
    document.getElementById("reset").style.visibility = "visible"
    document.getElementById("information").style.visibility = "visible"
}
}





function reset(){
    name="";
    password="";
    email="";
    year=0;
    month=0;
    day=0;
    alert("Här registerar du dig inte")
}


let year = 0;
let month = 0;
let day = 0;



// Check
//document.getElementById("checkbox").checked = true;

// Uncheck
//document.getElementById("checkbox").checked = false;
</script>
<main>

<div class="container">
    <h1>Register</h1>
    
    <form on:submit|preventDefault={handleSubmit}>
        <label> registrera ---></label>
        <input id="submit" type="submit" value="Registera" >
        <label for="name">Namn:</label>
        <input type="text" placeholder="***********" id="name"  bind:value={name}>
        <label for="mail">Mail:</label>
        <input type="email"placeholder="Millie" id="email" bind:value={email}>
        <label for="password">Lösenord:</label>
        <input type="password" placeholder="abc@123"id="password"bind:value={password}>
        <label for="ålder">Ålder:</label>
        <div class="plus">
        <input value="+"type="button" style="color: white" on:click={()=> year++ }>
        <input value="+"type="button" style="color: white" on:click={()=> month++}>
        <input value="+"type="button" style="color: white" on:click={()=> day++}>
        </div>

        <span>{year}år</span>
        <span>{month}månader</span>
        <span>{day}dagar</span>

        
        <label id="information"for="info">Tryck för att fortsätta</label>
        

    </form>
    <p id="redo">Nu är du redo för att registreras</p>
    
</div>

    <div class="reset">
        <button id="reset" on:click={reset}>↺</button>
    </div>

    
</main>

<style>


#information{
margin: 10px


}
.plus {
    width: 100%;
    display: flex;
    justify-content: space-around;
}


span {
     margin-left: 25px;
}
 main{
        background-image: url("https://get.pxhere.com/photo/landscape-horizon-cloud-sky-sunlight-atmosphere-daytime-cumulus-blue-blue-sky-clouds-brazil-meteorological-phenomenon-673492.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
        min-height: 500px;
        min-width: 500px;
        
    }

    
.container{
        border: solid 9px rgb(11, 121, 136);
        border-radius: 10px;
        width: 50%;
        height: 80%;
        background-color: #3a2e3be1;
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
    padding: 1px;
    background-color: rgb(13, 178, 190);
    height: 1px;
    position:fixed;
    left: 53%;
    bottom: 73%;
    font-size: 0.01px;
}
.container#submit{
    height: 60vw;
}

#submit:hover {
    background-color: rgb(120, 179, 163);
}
#submit:active {
    background-color: rgb(86, 211, 195)
}

#sträng{
    margin-top: 30px;
    
}

:checked{
    color: #3a2e3b;
}
a{
    text-decoration: underline;
    color: rgb(34, 169, 156);
}

select {
    color: black;
}
.reset{
    position: fixed;
    left: 55.5%;
    bottom: 35.5%;
    color: rgb(0, 255, 0);
}
#information{
font-size: 15px;

}
#mtext{
font-size:4px;
position: fixed;
left: 55.5%;
bottom: 40%;

}
   
</style>
