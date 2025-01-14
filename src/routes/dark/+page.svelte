<script lang="ts">
	import Button from "./button.svelte";


</script>

<div>
    <h1>Word</h1>
    <Button />
</div>

<style>
 :global(body){
    margin: 0;
    padding: 1rem;
    background-color: white;
    transition: background-color 0.5s
 }
 :global(body.dark-mode) {
    background-color: black;
    color: blueviolet
 }
 div {
    display: flex;
    flex-direction: column;
    height: 90.2vh;
    justify-content: center;
    align-items: center;
 }
</style>