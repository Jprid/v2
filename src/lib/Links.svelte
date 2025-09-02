<script lang="ts">
    import {fade} from "svelte/transition";
    import Link from "$lib/Link.svelte";
    import "$lib/Links.scss";

    export let links: any[] = [];
    let hovering = false;
    let hoveringOver = 0;
    let idToText = [0, 0, 0, 1, 1, 1];
    let menuHeaders = ["Menu", "Contact"];
</script>
<div class="sticky-links">
    <div class="beginning-line"></div>
    <ul id="">
        <li class="lato" class:show={hovering === true} id="menu-header" style="writing-mode: vertical-lr"
            transition:fade>
            {menuHeaders[idToText[hoveringOver]]}
        </li>
        {#each links as link, i (i)}
            <li
                on:focus={() => hoveringOver = i}
                on:mouseover={() => hovering = true}
                on:mouseleave={() => hovering = false}
                on:focusin={() => hoveringOver = i}
                on:focusout={() => hovering = false}
                on:mouseover={() => hoveringOver = i}>
                <Link href={link.href} title={link.link} i={i}/>
            </li>
        {/each}
        <li class="final"></li>
    </ul>
</div>