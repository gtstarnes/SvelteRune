<script lang="ts">
/**
 * REP: 2
*/
//VARIABLES
const tabs = ['Home', 'About', 'Projects',] 
let activeTab = $state("Home")

//FUNCTIONS
function changeTab (tab: string) {
    if (tab !== activeTab) {
        activeTab = tab
    }
}

</script>

<div>
    <nav>
        <div>Company Logo</div>
        <ul>
            {#each tabs as tab (tab)}
                <li><button onclick={()=> changeTab(tab)}>{tab}</button></li>
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
    }
    button {
        background-color: inherit;
        border: inherit;
        font-style: inherit;
        cursor: pointer;
        width: 50px;
    }
</style>