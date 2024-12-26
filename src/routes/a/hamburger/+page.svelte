<script lang="ts">
/**
 * REP: 1
*/

//VARIABLES
const tabs = ['Home', 'About', 'Projects']
let active = $state('Home');

//FUNCTIONS
function changeTab(tab: string) {
    if (tab !== active){
        active = tab
    }
}

</script>

<div>
    <nav>
        <span>COMPANY</span>
        <span>LOGO</span>
        <ul>
            {#each tabs as tab (tab)}
                <li onclick={() => changeTab(tab)}
                    class:active={tab === active}>{tab}</li>
            {/each}
        </ul>
    </nav>

</div>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    ul {
        display: flex;
        list-style: none;
        gap: 2px;
    }
    li {
        width: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .active {
        color: pink;
        border-bottom: 1px solid pink;
    }
</style>