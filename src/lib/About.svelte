<script>
    import {fade} from "svelte/transition";
    import {onMount} from "svelte";
    import "./About.scss";
    import {base} from "$app/paths";

    const duration = 2000
    const me = "John Pridmore";
    const imgAlt = "A photograph taken of me in 2020, behind a sunny though obscured, Chicago skyline";
    const introText = `Hi, I'm <span class=\"highlighted-text\">${me}</span>`
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
            <h1 transition:fade={{duration}}>{@html introText}</h1>
            <h2 transition:fade={{delay: duration, duration}}>A Software Engineer, located in Chicago, IL</h2>

        </div>
        <div class="menu-bar flexed-row-center" transition:fade={{delay:1300, duration: 3000}}>
            <p>Scroll To:</p>
            <a href="/">About</a>
            <a href="/#work">Work</a>
            <a href="/#contact">Contact</a>
        </div>
    {/if}
</div>
