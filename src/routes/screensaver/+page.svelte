<script lang="ts">

</script>

<div>
    <div class="block">Sup nerd</div>
</div>

<style>
    .block {
        height: 5rem;
        width: 6rem;
        background-color: gold;
        display: flex;
        justify-content: center;
        align-items: center;
        offset: path("M 100 100 L 200 600 L 300 100 L 500 600 z") auto;
        animation: move 3s linear infinite;
    }

    @keyframes move {
        from {
            offset-distance: 0%;
        }
        to {
            offset-distance: 100%;
        }
    }
</style>