<script lang="ts">
/**
 * REP: XII
 * Instructions:
 *      Create counter and counter squared
 *      center everything
 *      style
 *      commit after task blocks
 */

//variables
    let count = $state<number>(0);
    let square = $derived<number>(count * count)
</script>

<section class="count-container">
    <span class="count">{count}</span>
    <span class="control">
        <button class="count-button count-math" onclick={() => count++}>+</button>
        <button class="count-button count-clear" onclick={() => count = 0}>clr</button>
        <button class="count-button count-math" onclick={() => count--}>-</button>
    </span>
    <span class="count">{square}</span>
</section>

<style>
   .count-container {
    display: flex;
    flex-direction: column;
    height: 90vh;
    justify-content: center;
    align-items: center;
   }
   .count {
    font-size: 6rem;
   }
   .count-button {
    height: 3rem;
    width: 6rem;
    background-color: gray;
    border: none;
    font-size: 2rem;
    color: white;
    box-shadow: 8px 8px 10px rgba(0,0,0,0.2);
    cursor: pointer;
   }
   .count-math {
    background-color: orange;
   }
   .count-math:active {
        background-color: darkorange;
        scale: 95%;
    }
    .count-clear {
        translate: 0 0.5rem
    }
    .control {
        display: flex;
        gap: 0.5rem;
    }
</style>