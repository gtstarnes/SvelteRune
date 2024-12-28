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

</div>

<style>

</style>