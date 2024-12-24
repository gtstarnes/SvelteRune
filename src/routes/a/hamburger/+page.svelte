<script lang="ts">
/**
 * REP: 1
*/
const navLinks = ["Home", "About", "Projects"]

let active = $state("Home")
</script>

<div>
    <nav>
        <ul>
            {#each navLinks as link (link)}
                <li>{link}</li>
            {/each}
        </ul>
    </nav>
</div>

<style>
    ul {
        list-style: none;
        display: flex;
        gap: 10px;
    }
    nav {
        display: flex;
        align-items: center;
        justify-content: end;
    }
    li {
        cursor: pointer;
        padding: 2px;
        width: 4rem;
    }
    li:hover {
        font-weight: bold;
    }
</style>