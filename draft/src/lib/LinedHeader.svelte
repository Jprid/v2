<script lang="ts">
    export let text;
</script>

<div class="lined-header">
    <div class="before-line"></div>
    <h3>{text}</h3>
    <div class="after-line"></div>
</div>

<style lang="scss">
  .lined-header {
    font-family: Lato, sans-serif;
    letter-spacing: 0.5em;
    height: auto;
    width: 100vw;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    .before-line {
      width: 30vw;
      height: 1px;
      background: var(--carolina-blue) linear-gradient(to right, var(--prussian-blue) 30%, var(--carolina-blue) 100%);
      margin-left: 10em;
      margin-right: 1em;
    }

    & h3 {
      align-self: center;
      justify-self: center;
    }

    .after-line {
      width: 30vw;
      height: 1px;
      background: var(--carolina-blue) linear-gradient(to left, var(--prussian-blue) 30%, var(--carolina-blue) 100%);
      padding: 0 1vw;
      margin-left: 1em;
      margin-right: 10em;
    }
  }

  @media (orientation: portrait) {
    .lined-header {
      height: 2em;
      .before-line {
        margin-left: 0;
      }
      .after-line {
        margin-right: 0;
      }

      .before-line, .after-line {
        width: 10vw !important;
      }
    }

  }
</style>