<script>
import { base } from "$app/paths";
let bild1 = "https://cdn.pixabay.com/photo/2017/02/22/18/26/beach-2090197_960_720.jpg";


</script>
<main>
    <h1 class="curved-header">Sommarens Resedestination</h1>
<div class="container">
    
    <h1 class="header" alt="Flexbox egenskaper">Vart är resedestinationen för dig</h1>
    <div class="värmekalender "alt="Flexbox egenskaper"> <a href="{base}/Weather">Värmekalender</a></div>
    
</div>

<div class="image-container">
    <img src={bild1} alt="Karibiska havet" class="bottom-image" />
</div>
</main>
<style>
    .curved-header {
    font-size: 36px; 
    color: #333; 
    text-align: center;
    text-transform: uppercase; 
    letter-spacing: 2px; 
    padding: 10px 20px;
    border-radius: 50px; 
    background: linear-gradient(90deg, rgb(60, 223, 174), rgb(167, 236, 199)); 
   margin-top: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2); 
    position: relative;
}

.curved-header::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: -1;
    background: rgba(255, 255, 255, 0.2);
}

main{
    background-color: antiquewhite;
    height: 100vh;
    width: 100%;
    margin: 0;
   padding: 0;
   display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start; 
}
.container{
    margin-top: 20px;
    height: 90vh;
    width: 350px;
    background-color: rgba(0, 255, 255, 0.718);
    overflow: hidden;
    margin:auto;
    margin-top: 100px;
    margin-bottom: 10px;
    padding-bottom:100px ;
    justify-content: center;
    align-items: center;
    gap: 15px;
    box-shadow: 0px 15px 12px rgba(0,0,0,0.5);
    border-radius: 10px ;
}
div{
    background-color: rgba(15, 125, 125, 0.718);
    width: 100%;
    height: 100%;
    padding: auto;  
    margin: auto;
    margin-top: 100px;
}


.header{
    background-color: rgba(4, 57, 57, 0.452);
    border: 10px rgb(10, 9, 8);
    display: flex;
    margin: auto;
    height: 30px;
    width: 250px;
    border-radius: 5px;
    padding: 2px;
    margin-top: 100px;
    box-shadow: 0px 15px 12px rgba(0,0,0,0.5);

}
.värmekalender{
    background-color: rgb(255, 255, 255);
    color: black;
    display: flex;
    margin: auto;
    margin-top: 100px;
    
    height: 40px;
    width: 125px;
    text-align: center; 
    padding: 10px; 
    box-shadow: 0px 8px 20px rgba(0,0,0,0.5);
    flex-grow: 1;
    flex-shrink: 1;
    border: 1px solid #000000;
    border-radius: 5px;
    
}
.värmekalender:hover{
    flex-grow:2;
    flex-shrink:0;
    
}

.värmekalender:active{
        transform: scale(0.9)
    }


    .image-container {
    width: 100%;
    text-align: center; 
    
    overflow: hidden; 
    display: flex; 
    border-radius: 5px;
}

.bottom-image {
    width: 100%; 
    height: auto; 
    border-radius: 10px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5); 
}

</style>
