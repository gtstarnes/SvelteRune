<script lang="ts">
/**
 * REP: V
*/
    //VARIABLES
    const tabs = ["Home", "About", "Projects", ]
    let {active = $bindable("Home")} = $props()

    //FUNCTIONS
    function changeTab(tab:string) {
        if (tab !== active){
            active = tab
        }
    }
</script>

<div class="container">
    <div>LOGO</div>
    <nav>
        <ul>

        </ul>
    </nav>
</div>

<style>

</style>