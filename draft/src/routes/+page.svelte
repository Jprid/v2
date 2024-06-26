<script lang="ts">
    import Switcher from "$lib/Switcher.svelte";
    import About from "$lib/About.svelte";
    import Links from "$lib/Links.svelte";
    import LinedHeader from "$lib/LinedHeader.svelte";
    import {fade} from "svelte/transition";

    type Content = { title: string, content: string[], name: string, startStop: string[] };
    type HeroContent = { pic_ref: string, content: string[], subHeader: string };
    $: selectedTab = 0;
    let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" +
        "dolore magna aliqua." + "Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Faucibus nisl tincidunt eget nullam. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Adipiscing elit pellentesque habitant morbi tristique senectus et. Lacus suspendisse faucibus interdum posuere lorem ipsum. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Sit amet mauris commodo quis imperdiet massa. Integer quis auctor elit sed vulputate mi sit amet. Morbi tincidunt ornare massa eget. Rutrum tellus pellentesque eu tincidunt tortor." + "Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Dolor morbi non arcu risus quis varius."
        + "Et odio pellentesque diam volutpat commodo sed.";
    const me = "John Pridmore";

    export let halfIpsum = loremIpsum.slice(0, loremIpsum.length / 4);
    export let headerList: Array<Content> = [
        {
            title: "Software Engineer",
            content: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
                "dolore magna aliqua.", "Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Faucibus nisl tincidunt eget nullam. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Adipiscing elit pellentesque habitant morbi tristique senectus et. Lacus suspendisse faucibus interdum posuere lorem ipsum. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Sit amet mauris commodo quis imperdiet massa. Integer quis auctor elit sed vulputate mi sit amet. Morbi tincidunt ornare massa eget. Rutrum tellus pellentesque eu tincidunt tortor.", "Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Dolor morbi non arcu risus quis varius.", "Et odio pellentesque diam volutpat commodo sed."],
            name: "Current",
            startStop: ["September 2023", "Present"]
        },
        {
            name: "Galileo",
            content: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
                "dolore magna aliqua.", "Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Faucibus nisl tincidunt eget nullam. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Adipiscing elit pellentesque habitant morbi tristique senectus et. Lacus suspendisse faucibus interdum posuere lorem ipsum. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Sit amet mauris commodo quis imperdiet massa. Integer quis auctor elit sed vulputate mi sit amet. Morbi tincidunt ornare massa eget. Rutrum tellus pellentesque eu tincidunt tortor.", "Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Dolor morbi non arcu risus quis varius.", "Et odio pellentesque diam volutpat commodo sed."],
            title: "Executive Grimace",
            startStop: ["October 2021", "September 2023"]
        },
        {
            title: "Software Dongler",
            content: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
                "dolore magna aliqua.", "Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Faucibus nisl tincidunt eget nullam. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Adipiscing elit pellentesque habitant morbi tristique senectus et. Lacus suspendisse faucibus interdum posuere lorem ipsum. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Sit amet mauris commodo quis imperdiet massa. Integer quis auctor elit sed vulputate mi sit amet. Morbi tincidunt ornare massa eget. Rutrum tellus pellentesque eu tincidunt tortor.", "Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Dolor morbi non arcu risus quis varius.", "Et odio pellentesque diam volutpat commodo sed."],
            name: "Relativity",
            startStop: ["2018", "October 2021"]
        },
        {
            title: "Software Dongler",
            content: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
                "dolore magna aliqua.", "Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Faucibus nisl tincidunt eget nullam. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Adipiscing elit pellentesque habitant morbi tristique senectus et. Lacus suspendisse faucibus interdum posuere lorem ipsum. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Sit amet mauris commodo quis imperdiet massa. Integer quis auctor elit sed vulputate mi sit amet. Morbi tincidunt ornare massa eget. Rutrum tellus pellentesque eu tincidunt tortor.", "Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Dolor morbi non arcu risus quis varius.", "Et odio pellentesque diam volutpat commodo sed."],
            name: "rMark Bio LLC",
            startStop: ["2018", "October 2021"]
        }
    ];
    let links = [
        {link: "work", ref: "briefcase.svg", href: "#work"},
        {link: "contact", ref: "", href: "#contact"},
        {link: "", ref: "", href: ""},
        {link: "Mail", ref: "mail.svg", href: "mailto:johnpridmore.lit@gmail.com"},
        {link: "LinkedIn", ref: "linkedin.svg", href: "https://www.linkedin.com/in/jprid"},
        {link: "Github", ref: "github.svg", href: "https://www.github.com/jprid"}
    ];
    const preferredContactMethod = "";
    export const prerender= true;
</script>
<div class="main">
    <Links links={links}/>
    <section id="about" class="entry" role="tabpanel">
        <About></About>
    </section>
    <section class="experience-list" id="work" role="tabpanel">
        <div class="fs-xl flexed-row-center lato lined-header">
            <LinedHeader text="Experience"/>
        </div>
        <Switcher selectedTab={selectedTab}/>
    </section>
    <footer id="contact" class="flexed-col-center">
        <div class="lined-header fs-xl">
            <LinedHeader class="lato" text="Contact"/>
        </div>

        <div class="contact-card flexed-col-center">
            <h2>The best way to get a hold of me is through <a transition:fade href={links[1]}>LinkedIn</a> or my <a>Email</a>.</h2>
        </div>
        <span class="acknowledgments fs-sm">
            The design for this version of my site is heavily inspired by <a
                href="https://v4.brittneychiang.com">Brittney Chiang's Site</a>.
            Here's the <a href="http://www.jprid.com">previous iteration</a> of my website.

        </span>
    </footer>
</div>

<style lang="scss">
  .main {
    display: flex;
    flex-flow: column nowrap;
    background: var(--prussian-blue);
    color: white;
    height: 100%;
    width: 100%;
    line-height: 2em;
  }

  .contact-card {
    height: 90%;

    a {
      text-decoration: none;
      color: var(--mint);
      &:hover {
        text-decoration: underline;
        filter: brightness(150%);
      }
    }
  }

  .entry {
    width: 100%;
    height: 100%;
    background: inherit;
  }

  .experience-list {
    display: flex;
    flex-flow: column nowrap;
    background-color: var(--prussian-blue);
    min-height: 100vh;


    div {

      p {
        width: 30%;
        height: 100%;
      }

      h3 {
        background-color: var(--prussian-blue);
      }
    }

  }

  footer {
    font-family: Lato, sans-serif;
    min-height: 100vh;
    display: flex;

    a, a:visited {
      color: white;
      padding-left: 0.25vw;
    }

    span.acknowledgments {
      justify-self: flex-end !important;
    }
  }
</style>