<script lang="ts">
//VARIABLES
    let {text, count, id}: {text: string, count: number, id: number} = $props()
</script>

<div>
    <div>
        <button>^</button>
        <span>{count}</span>
        <button>v</button>
    </div>
    <div>{text}</div>
    <button>Delete</button>
</div>

<style>

</style>