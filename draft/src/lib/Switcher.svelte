<script lang="ts">
    import {fade} from "svelte/transition";
    import type {Experience} from "$lib/models";
    import experienceJson from "../content.json";
    import "./Switcher.scss"
    export let list: Experience[] = (experienceJson.experience) ?? [];
    export let selectedTab: number = 0;

    let relativities = list.filter(x => x.company === "Relativity");
    list = [list[0], list[1], list[3]];
    list[1].experience_content = [];
    list[1].experience_content = [...relativities[0].experience_content, ...relativities[1].experience_content];
    list[1].end = relativities[0].end;
    list[1].start = relativities[1].start;

    function switchTab(i: number) {
        selectedTab = i;
    }
</script>

<div class="switcher">
    <div class="header-list" role="tablist">
        {#each list as header, i}
            <div role="tab" tabindex={i} class="fs-md header" class:selected-tab={selectedTab === i}>
                <button type="button" in:fade={{duration: 500}} out:fade={{duration: 3000}} on:keydown={() => switchTab(i)}
                        on:click={() => switchTab(i)}>{header.company}</button>
            </div>
        {/each}
    </div>
    <div class="content" role="tabpanel">
        {#key selectedTab}
            <div class="content-header">
                <strong>{list[selectedTab].title}</strong>
                <p class="fs-sm">From {list[selectedTab].start} to {list[selectedTab].end}</p>
            </div>
            <ul>
                {#each list[selectedTab].experience_content ?? [] as p, i}
                    <li class="fs-sm shadowed-text-prussian-blue">{p}</li>
                {/each}
            </ul>
        {/key}
    </div>
</div>
