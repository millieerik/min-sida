<script>

</script>

<main>
    <slot>

    </slot>
</main>
<div class="backdrop">
</div >

<style>
main{
    width: 80vw;
    height: 100vh;
    background-color: rgba(255,255,255,0.8);
    margin: 5vh auto;
    border: 3px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.backdrop{
    width: 100vw;
    height: 100vh;
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(5px);
    background-image: url(https://imageio.forbes.com/specials-images/imageserve/604202ff091b6539cb90fcbc/The-backs-of-a-number-of-Pok-mon-cards-/960x0.jpg?format=jpg&width=960);
}

</style>