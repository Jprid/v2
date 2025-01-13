<script lang="ts">
    import {contactIcon, divIcon, githubIcon, linkedInIcon, mailIcon, workIcon} from "$lib/Icons";

    export let i: number;
    export let href: string;
    export let title: string;

    let mapping: any[] = [workIcon(), contactIcon(),divIcon(),mailIcon(),linkedInIcon(),githubIcon()];
</script>

<a href={href} title="{title}" style="color: white">
    {@html mapping[i]}
</a>