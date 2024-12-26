<script lang="ts">
/**
 * REP: 1
*/

//VARIABLES
const tabs = ['Home', 'About', 'Projects']
let active = $state('Home');

</script>

<div>
    <nav>
        <span>COMPANY</span>
        <span>LOGO</span>
        <ul>
            {#each tabs as tab (tab)}
                <li>{tab}</li>
            {/each}
        </ul>
    </nav>

</div>

<style>

</style>