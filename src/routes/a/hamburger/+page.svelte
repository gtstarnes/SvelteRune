<script lang="ts">
/**
 * REP: 1
*/

//VARIABLES
const navLinks = ["Home", "About", "Projects"]
let active = $state("Home")

//FUNCTIONS
function changeActive(link: string) {
    if (link !== active) {
        active = link
    }
}
</script>

<div>
    <nav>
        <ul>
            {#each navLinks as link (link)}
                <li class:active={link === active} onclick={() => changeActive(link)}>{link}</li>
            {/each}
        </ul>    
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M2 15.5v2h20v-2zm0-5v2h20v-2zm0-5v2h20v-2z"/>
        </svg>
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
        display: flex;
        justify-content: center;
    }
    li:hover {
        font-weight: bold;
    }
    .active {
        color: gold;
        border-bottom: 2px solid gold;
    }
    svg {
        cursor: pointer;
    }
</style>