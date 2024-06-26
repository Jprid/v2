<script lang="ts">
    import {fade} from "svelte/transition";
    import type {Experience} from "$lib/models";
    import experienceJson from "../content.json";

    export let list: Experience[] = (experienceJson.experience) ?? [];

    // join together two positiions at relativity to accomadate new page design
    let relativities = list.filter(x => x.company === "Relativity");
    list = [list[0], list[1], list[3]];
    list[1].experience_content = [];
    list[1].experience_content = [...relativities[0].experience_content, ...relativities[1].experience_content];

    export let selectedTab: number = 0;
    console.log(list);

    function switchTab(i: number) {
        selectedTab = i;
    }
</script>

<div class="switcher">
    <div class="header-list" role="tablist">
        {#each list as header, i}
            <div role="tab" tabindex={i} class="fs-md header" class:selected-tab={selectedTab === i}>
                <button in:fade={{duration: 500}} out:fade={{duration: 3000}} on:keydown={() => switchTab(i)}
                        on:click={() => switchTab(i)}>{header.company}</button>
            </div>
        {/each}
    </div>
    <div class="content" role="tabpanel">
        {#key selectedTab}
            <div class="content-header">
                <strong in:fade={{duration: 300}}>{list[selectedTab].title}</strong>
                <p class="fs-md">{list[selectedTab].start} - {list[selectedTab].end}</p>
            </div>
            <ul>
                {#each list[selectedTab].experience_content ?? [] as p, i}
                    <li class="fs-sm shadowed-text-prussian-blue">{p}</li>
                {/each}
            </ul>
        {/key}
    </div>
</div>
<style lang="scss">
  .switcher {
    display: grid;
    grid-template-areas:  "h h c c c"
                            "h h c c c"
                            "h h c c c";
    background: var(--prussian-blue);
    padding: 10vh 25vw;
  }

  .header-list {
    grid-area: h;
    width: 100%;
    height: 100% !important;
    color: gray;

    .selected-tab {
      color: var(--mint) !important;
      border-right: 0.15em var(--blue-munsell) solid !important;
      text-shadow: 1px 1px 1px var(--blue-munsell);
    }

    .header {
      width: 100%;
      padding: 1vw 1vh;
      border-right: 0.15em color-mix(in srgb, var(--midnight-green) 90%, transparent) solid;
      height: 10em;
      font-family: Lato, sans-serif;
      letter-spacing: 0.33em;
      text-align: center;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;

      button {
        background-color: inherit;
        color: inherit;
        border: inherit;
        border-right: 0;
        font-family: inherit;
        letter-spacing: inherit;
        text-align: inherit;
        height: inherit;
        cursor: pointer;
      }
    }
  }

  .content {
    grid-area: c;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    margin-left: 3em;
    font-family: "Bookman Old Style", sans-serif;
    font-size: 20px;
    color: white;
    justify-content: center;

    .content-header {
      font-family: Lato, sans-serif;
    }

    li {
      padding-left: 1.5em;
      margin-bottom: min(1em, 10px);
      //text-shadow: 5px 5px 4px black;
      list-style: none;
      position: relative;

      &::before {
        content: "▹";
        position: absolute;
        left: 0px;
        color: var(--carolina-blue);
        text-shadow: none;
      }
    }
  }
</style>