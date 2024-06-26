<script>
    import {fade} from "svelte/transition";
    import {onMount} from "svelte";
    import {base} from "$app/paths";

    const duration = 2000
    const me = "John Pridmore";
    const imgAlt = "A photograph taken of me in 2020, behind a sunny though obscured, Chicago skyline";

    let mounted = false;
    onMount(() => {
        mounted = true;
    });

</script>
<div class="hero">
    {#if mounted}

        <div class="pic">
            <img transition:fade={{delay: 300, duration}} alt={imgAlt} src="DSC04172.webp">
            <div transition:fade={{delay: 2300, duration}} class="after-effect"></div>
        </div>
        <div transition:fade={{duration}} class="body-text flexed-col-center">
            <h1 tranisition:fade={{duration}}>Hi, I'm <span class="highlighted-text">{me}</span></h1>
            <h2 tranisition:fade={{delay: duration, duration}}>A Software Engineer, located in Chicago, IL</h2>

        </div>
        <div class="menu-bar flexed-row-center" transition:fade={{delay:1300, duration: 3000}}>
            <p>Scroll To:</p>
            <a href="{base}/">About</a>
            <a href="{base}/#work">Work</a>
            <a href="{base}/#contact">Contact</a>
        </div>
    {/if}
</div>
<style lang="scss">
  .hero {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-areas: "p b"
                         "m m";
    grid-template-columns: 2fr 2fr;
    grid-template-rows: 1fr 1fr;
    padding: 0vh 15vw;
    margin: 0;
    overflow: hidden;
    font-family: Lato, sans-serif;
  }

  .after-effect {
    background-color: var(--mint);
    height: 246px;
    width: 248px;
    top: -220px;
    left: -30px;
    position: relative;
    opacity: 30%;
    border-radius: var(--image-border-radius);

    &:hover, &:focus {
      z-index: -1;
    }
  }

  .menu-bar {
    grid-area: m;
    width: 100%;

    a {
      width: 10vw;
      border: 2px solid white;
      font-family: Lato, sans-serif;
      border-radius: 20px;
      margin: 0 1vw;
      text-align: center;
      vertical-align: center;
      position: relative;
      box-shadow: -6px 4px 0px var(--mint);
      height: 2.5em;
      letter-spacing: 1em;
      font-size: 17px;
      color: white;
      text-decoration: none;

      &:hover {
        background: var(--mint);
        border: 2px solid var(--mint);
        box-shadow: -6px 4px 0px white;
        letter-spacing: 1vw;
      }

      &:visited {
        color: inherit;
        text-decoration: none;
      }
    }
  }

  .pic {
    grid-area: p;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    img {
      max-height: 266px;
      border-radius: var(--image-border-radius);

      &:hover {
        z-index: 1;
        animation: 2s ease-in;
      }
    }
  }

  .body-text {
    h1:not(.highlighted-text) {
      font-size: 2vh;
      letter-spacing: 0.5vw;
    }
  }

</style>