<script lang="ts">
/**
 * REP: 1
*/

//VARIABLES
const navLinks = ["Home", "About", "Projects"]
let active = $state("Home")
let width = $state(0)
//FUNCTIONS
function changeActive(link: string) {
    if (link !== active) {
        active = link
    }
}

//EFFECTS
$effect(() => {
    if (typeof window !== "undefined") {
        const handleResize = () => {
            width = window.innerWidth;
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }
})


</script>

<div>
    <nav>
        {#if width < 768}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M2 15.5v2h20v-2zm0-5v2h20v-2zm0-5v2h20v-2z"/>
            </svg>
        {:else}
            <ul>
                {#each navLinks as link (link)}
                    <li class:active={link === active} onclick={() => changeActive(link)}>{link}</li>
                {/each}
            </ul>    
        {/if}

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