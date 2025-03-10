<script>

let number=""
let list=Array(5)

function add(number){
   
}

</script>

<main>
<div class="container">
    <div class="grid-box1" ></div>
    <div class="grid-box1" ></div>
    <div class="grid-box1" ></div>
    <div class="grid-box1" ></div>
    <div class="grid-box1" ></div>
    <div class="grid-box1" ></div>
    <div class="grid-box1" ></div>
</div>
</main>

<style>

.grid-box1{
    display: grid;
    
    top: 150px;
    left: 0px;
    height: 7em;
    width: 6em;
    background-color: rgb(255, 0, 0);
    margin: 1em; 
    grid-template-columns: 1fr 2fr 1fr;;
    grid-template-rows: 3fr 1fr 1fr;;
}



 

.container{
    display: grid;
    background-color: aliceblue;
    height: 500px;
    width: 500px;
    
   

}



</style>