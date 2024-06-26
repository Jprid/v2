<script lang="ts">
    import {fade} from "svelte/transition";

    export let links: any[] = [];
    let hovering = false;
    let hoveringOver = 0;
    let idToText = [0, 0, 0, 1, 1, 1];
    let menuHeaders = ["Menu", "Contact"];
</script>
<div class="sticky-links">
    <div class="beginning-line"></div>
    <ul>
        <li class="lato" class:show={hovering === true} id="menu-header" style="writing-mode: vertical-lr"
            transition:fade>
            {menuHeaders[idToText[hoveringOver]]}
        </li>
        {#each links as link, i (i)}
            <li on:mouseover={() => hovering = true} on:mouseleave={() => hovering = false}
                on:mouseover={() => hoveringOver = i}>
                <a href={link.href} title={link.link} style="color: white">
                    {#if i === 5 }
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-github">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    {/if}
                    {#if i === 4}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-linkedin">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    {/if}
                    {#if i === 3}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-mail">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    {/if}
                    {#if i === 2}
                        <hr/>
                    {/if}
                    {#if i === 0}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-briefcase">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                    {/if}
                    {#if i == 1}
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2"
                             fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </svg>
                    {/if}
                </a>
            </li>
        {/each}
        <li class="final"></li>
    </ul>
</div>
<style lang="scss">
  ul {
    width: 5em;
  }

  #menu-header {
    opacity: 0;
    height: 5em;

    &.show {
      display: inline !important;
      opacity: 100%;
    }
  }

  .sticky-links {
    width: 10em;
    height: 100%;
    position: fixed;
    padding-top: 2.5vh;

    ul {
      list-style: none;
      height: 100vh;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;

      &::after {
        width: 1px;
        height: 100%;
        background-color: var(--mint);
      }

      svg {
        color: white;
      }

      svg:hover, svg:focus {
        color: var(--mint);
        transition: 0s;
      }

      li {
        position: relative;

        &:not(:first-child) {
          margin-top: 2.5vh;
        }

        &::after {
          width: 1em;
          background-color: white;
          height: 100%;
        }

        &:not(.final):hover {
          animation: bounce;
        }

        &.final {
          background: rgb(255, 255, 255);
          background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 47%, rgba(23, 42, 58, 1) 100%);
          height: 30%;
          width: 1px;
          border-radius: 10px;
        }
      }
    }

    svg {
      max-height: 25px;
    }
  }
</style>