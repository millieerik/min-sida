<script>

let image = "https://picsum.photos/id/70/367/267"
let photo = "https://picsum.photos/id/88/367/267"
let picture = "https://picsum.photos/id/93/367/267"






</script>

    <h1>Photoapp</h1>

    <p>Denna sida innehåller <strong>fina</strong> bilder</p>
<div class="photos">
    <div class= "image-wrapper"><img src={image} alt="Flexbox egenskaper"></div>
    <div class= "image-wrapper"><img src={photo} alt= "Flexbox egenskaper"></div>
    <div class= "image-wrapper"><img src={picture} alt= "Flexbox egenskaper"></div>
</div>



<style>
    .photos{
        overflow:hidden;
        display:flex;
        max-width: 90vw;
        align-items: center;
        justify-content:center;
        

    }
    .image-wrapper img{
        width: 100%;
        border-radius:20px ;
        border: 2px solid white;
        box-shadow: 4px 8px 10px rgba(0,0,0,0.2);
       
    }
    .image-wrapper{
        margin:10px;
        flex-basis:300px;
        flex-grow: 1;
        flex-shrink: 1;
        background-color: transparent;
        
    }
    .image-wrapper:hover{
        flex-grow:2;
        flex-shrink:0;
        
    }
    .image-wrapper:active{
        transform: scale(0.9)
    }

    
h1{
    text-align: center;
    font-size: 40px;
    margin: 40px;
    color: rgb(124, 58, 144);
}

</style>