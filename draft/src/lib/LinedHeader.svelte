<script lang="ts">
    export let text;
</script>

<div class="lined-header">
    <div class="before-line"></div>
    <h3>{text}</h3>
    <div class="after-line"></div>
</div>

<style>
    .lined-header {
        height: 10px;
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: center;

        & .before-line {
            width: 100%;
            height: 1px;
            background: var(--carolina-blue) linear-gradient(to right, var(--prussian-blue) 30%, var(--carolina-blue) 100%);
            margin-left: 10em;
            margin-right: 1em;
        }

        & .after-line {
            width: 100%;
            height: 1px;
            background: var(--carolina-blue) linear-gradient(to left, var(--prussian-blue) 30%, var(--carolina-blue) 100%);
            padding: 0 1vw;
            margin-left: 1em;
            margin-right: 10em;
        }
    }
</style>