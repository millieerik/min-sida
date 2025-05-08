<script>
import { base } from "$app/paths";



</script>

<div class="container">
    
    <h1 class="header" alt="Flexbox egenskaper">Vart är resedestinationen för dig</h1>
    <div class="värmekalender "alt="Flexbox egenskaper"> <a href="{base}/Weather">Värmekalender</a></div>
</div>

<style>

.container{
    height: 100%;
    width: 100%;
    background-color: rgba(0, 255, 255, 0.718);
    overflow: hidden;
}

h1{
    display: flex;
    margin: auto;
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
    
}
.värmekalender:hover{
    flex-grow:2;
    flex-shrink:0;
    
}

.värmekalender:active{
        transform: scale(0.9)
    }

</style>
osition: fixed;
    bottom: 75%;
    right: 37.5%;