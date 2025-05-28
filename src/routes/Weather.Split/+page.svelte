<script>
    import { onMount } from 'svelte';
    import { base } from '$app/paths';

let bild1="https://www.propertyguides.com/cyprus/media/sites/19/sea-caves-ayia-napa.jpg"
let bild2="https://christabellehotel.com/Content/Images/Ayia%20Napa/ayianapanightlife.jpg"
let bild3="https://www.knossostravel.com/templates/yootheme/cache/01-f22e4279.jpeg"

</script>
<main>
    <div class="container-wrapper">
    <div class="container" >
        <h1 class="header" alt="Flexbox egenskaper"> Split är destinationen för dig</h1>
        
        <!-- Upplevelser-knapp -->
        <div class="button-container">
            <button class="Upplevelser-button">To do in:</button>
            <div class="dropdown">
                <a href="https://www.getyourguide.se/ayia-napa-l124743/havsgrotor-formiddag-cape-greco-konnos-bukten-lovers-bridge-och-mer-t991220/?ranking_uuid=c242f40e-70d9-4c3d-b55a-ea1380a06dee" class="dropdown-link">Guid i havsgrottor</a>
                <a href="https://www.getyourguide.com/pernera-l191294/golden-hour-sunset-cruise-t579689/?ranking_uuid=a6bb6dbb-baeb-466e-b45f-1539c7d17e09" class="dropdown-link"> Båt tur i solnedgång</a>
                <a href="https://www.getyourguide.com/protaras-l132513/from-protaras-cruise-to-blue-lagoon-turtle-cove-sea-cave-t473344/?ranking_uuid=a2f12484-8ab2-4fa2-bef9-844ed6b8f394" class="dropdown-link">Under vattens safari</a>
            </div>
        </div>

        <!-- Restauranger-knapp -->
        <div class="button-container">
            <button class="resturanger-button">To eat in:</button>
            <div class="dropdown">
                <a href="https://alion.com/gastronomy/the-deck-terrace-restaurant/" class="dropdown-link">The Deck Terrace Restaurant</a>
                <a href="https://www.facebook.com/RoofBurgerBar" class="dropdown-link">Roof Burger Bar</a>
                <a href="https://www.isolabeachbar.com/" class="dropdown-link">Isola Beach Bar</a>
            </div>
        </div>

        <!-- Se-knapp -->
        <div class="button-container">
            <button class="Se-button">To see in:</button>
            <div class="dropdown">
                <a href="" class="dropdown-link">Sight 1</a>
                <a href="" class="dropdown-link">Sight 2</a>
                <a href="" class="dropdown-link">Sight 3</a>
            </div>
        </div>
        <div class="button "alt="Flexbox egenskaper" > <a href="http://localhost:5173/Startpage.Weather">Startsida</a></div>
        
    </div>

    <div class="container" >
    <div class="photos">
        <h1 class="header" alt="flexbox egenskaper">Bilder och inspo för din resa</h1>
        <div class= "image-wrapper"><img src={bild1} alt="Flexbox egenskaper"></div>
        <div class= "image-wrapper"><img src={bild2} alt= "Flexbox egenskaper"></div>
        <div class= "image-wrapper"><img src={bild3} alt= "Flexbox egenskaper"></div>
        
    </div>
    </div>
</div>
</main>


<style>
    .button a{
        background-color: lightgreen;
        color: black;
        display: inline-block;
        text-align: center;
        padding: 5px 10px;
        font-size: 14px;
        text-decoration: none;
        box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
        transition: transform 0.2s ease;
    }
    
    
    main {
        background-color:  antiquewhite;
        background-size: cover;
        background-position: center;
        height: 100vh;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    
    
    .container {
        display: flex;
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
        height: 80vh; 
        width: 45%; 
        background-color: rgba(0, 255, 255, 0.718);
        overflow: hidden;
        margin: 30px auto;
        border-radius: 5px;
        margin-top: 75px;
        margin-bottom: 40px;
        gap: 15px; 
    }
    
    h1 {
        display: flex;
        margin: auto;
        height: 50px;
        width: 300px;  
        font-size: 14px;
        color: white;
        align-self: center;
    }
    .button-container{
        
        color: black;
        display: flex;
        margin: auto;
        height: 100%;
        width: 150px; 
        text-align: center; 
        padding: 10px; 
        margin-bottom: 5px;
        border: 1px solid #000000;
        box-shadow: 0px 8px 20px rgba(0,0,0,0.5);
        flex-grow: 1;
        flex-shrink: 1;
        &:hover {
            flex-grow: 1;
            flex-shrink: 1;
        }
    }
    .container-wrapper {
        display: flex;
        flex-direction: row; 
        justify-content: center; 
        align-items: flex-start; 
        gap: 20px; 
        padding: 20px;

    }
    
    .button-container {
        position: relative;
        margin-top: 20px;
    }
    .header{
        background-color: rgba(4, 57, 57, 0.452);
        border: 10px rgb(10, 9, 8);
        display: flex;
        margin: auto;
        height: 30px;
        width: 300px;
        border-radius: 5px;
        padding: 2px;
        margin-top: 12%;
        margin-bottom: 0px;
        box-shadow: 0px 15px 12px rgba(0,0,0,0.5);
        
    }
    
    .dropdown {
        display: none;
        position: absolute;
        top:-20%;
        left: 150%;
        transform: translateX(-50%);
        background-color: rgb(158, 208, 208);
        border: 4px solid #000000;
        border-radius: 5px;
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);
        padding: 10px;
        z-index: 10;
    
    }
    
    .dropdown-link {
        display: block;
        padding: 5px 10px;
        color: black;
        text-decoration: none;
        font-size: 14px;
    }
    
    .dropdown-link:hover {
        background-color: #2b85ae;
    }
    
    .button-container:hover .dropdown {
        display: block;
    }
    
    
    
    .container-wrapper {
        display: flex;
        flex-direction: row; 
        justify-content: center;
        align-items: flex-start; 
        gap: 20px; 
        padding: 20px;
    }
    
    
    .photos{
            display: flex;
            direction: column;
            flex-direction: column;
            overflow:hidden;
            width: 60%;
            height: 100%;
            align-items: center;
            justify-content:center;
            
        }
        .image-wrapper img{
            width: 50%;
            align-items: center;
            justify-content: center;
            text-align: center;
            border-radius:20px ;
            border: 2px solid white;
            box-shadow: 4px 8px 10px rgba(0,0,0,0.2);
            margin-top: 10px;
        }
        .image-wrapper {
        display: flex;
        justify-content: center; 
        width: 100%;
    }
    
    
    </style>