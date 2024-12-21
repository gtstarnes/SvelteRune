<script lang="ts">
//IMPORTS
	import Link from "../components/Link.svelte";
	import { links } from "../data/linkData";


</script>

<div>
    <div>Mini Projects:</div>
    <div>
        <ul>
            {#each links as link(link.href)}
                <li><Link text={link.text} href={link.href}/></li>
            {/each}
        </ul>
    </div>
</div>

<style>
    ul {
        list-style: none;
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
</style>