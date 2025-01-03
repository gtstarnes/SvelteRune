<script lang="ts">
    let timer = $state(0)
    let mins = $derived(Math.floor(timer/60));
    let seconds = $derived(timer - mins * 60);
    let isRunning = $state(false);

    function toggleTimer() {
        isRunning = true;
    }

</script>

<div>
    <span>
        {#if mins < 10}
            0{mins}
        {:else}
            {mins}
        {/if}:{#if seconds < 10}0{seconds}
        {:else}
            {seconds}
        {/if}
    </span>
    <div>
        <button onclick={() => timer = timer+30}>+00:30</button>
        <button onclick={() => timer = timer+60}>+01:00</button>
        <button onclick={() => timer = timer+300}>+05:00</button>
    </div>
    <button onclick={toggleTimer}>Start</button>
</div>

<style>

</style>