<script lang="ts">
//IMPORTS
	import Link from "../components/Link.svelte";
	import { links } from "../data/linkData";


</script>

<div class="container">
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
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
    }
</style>