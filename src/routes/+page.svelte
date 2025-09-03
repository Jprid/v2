<script lang="ts">
    import Switcher from "$lib/Switcher.svelte";
    import About from "$lib/About.svelte";
    import Links from "$lib/Links.svelte";
    import LinedHeader from "$lib/LinedHeader.svelte";
    import {fade} from "svelte/transition";

    $: selectedTab = 0;

    let links = [
        {link: "work", ref: "briefcase.svg", href: "#work"},
        {link: "contact", ref: "", href: "#contact"},
        {link: "", ref: "", href: ""},
        {link: "Mail", ref: "mail.svg", href: "mailto:johnpridmore.lit@gmail.com"},
        {link: "LinkedIn", ref: "linkedin.svg", href: "https://www.linkedin.com/in/jprid"},
        {link: "Github", ref: "github.svg", href: "https://www.github.com/jprid"}
    ];
    const preferredContactMethod = "";
</script>
<div class="main">
    <Links links={links}/>
    <section class="entry" id="about" role="tabpanel">
        <About></About>
    </section>
    <section class="experience-list" id="work" role="tabpanel">
        <LinedHeader text="Experience"/>
        <Switcher selectedTab={selectedTab}/>
    </section>

    <section class="flexed-col-center" id="contact">
        <LinedHeader text="Contact"/>

        <div class="contact-card flexed-col-center">
            <h2>The best way to get a hold of me is through <a href={links[4].href} transition:fade>LinkedIn</a> or my
                <a href="{links[3].href}">Email</a>.</h2>
        </div>
        <span class="acknowledgments fs-sm">
            The design for this version of my site is heavily inspired by <a
                href="https://v4.brittanychiang.com/">Brittany Chiang's Site</a>.
<!--            Here's the <a href="http://www.v1.jprid.com">previous iteration</a> of my website.-->

        </span>
    </section>
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
    h2 {
      a {
        text-decoration: none;
        color: var(--mint);

        &:hover {
          text-decoration: underline;
          filter: brightness(150%);
        }
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
    height: 100vh;

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

  section#contact {
    font-family: Lato, sans-serif;
    height: auto;
    display: flex;
    flex-flow: column nowrap;
    text-align: center;

    a, a:visited {
      padding-left: 0.25vw;
    }

    .contact-card {
      height: 50vh;
      width: 100%;
    }

    span.acknowledgments {
      justify-self: flex-end !important;
      line-height: 1em;
      padding-bottom: 1em;
      a, a:visited {
        color: var(--mint);
      }
    }
  }

  @media screen and (orientation: portrait) {
    @media (max-height: 844px) {
      section#contact {
        width: 100vw;
        margin-top: 100vh;
        .contact-card {
          width: 60vw;
          height: 70vh;

          h2 {
            font-size: 12px;
          }
        }

        span.acknowledgments {
          font-size: 7px;
          width: 90vw;
          text-align: center;
          line-height: 1em;
          margin-bottom: 1vh;
        }
      }
    }
  }
</style>