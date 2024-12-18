<script lang="ts">
//IMPORTS
	import Link from "../components/Link.svelte";


</script>

<div>
    <div>Mini Projects:</div>
    <div>
        <ul>
            <li><Link text="Rune Count" href="/count" /></li>
            <li><Link text="Rune Todo" href="/todo" /></li>
            <li><Link text="Rune Area" href="/area" /></li>
            <li><Link text="Rune Parent" href="/parent" /></li>
            <li><Link text="Rune Binder" href="/binder" /></li>
            <li><Link text="Rune Login" href="/login" /></li>
            <li><Link text="Rune SignUp" href="/signup" /></li>
            <li><Link text="Rune Comments" href="/comments" /></li>
            <li><Link text="Rune Colors" href="/colors" /></li>
        </ul>
    </div>
</div>

<style>
    ul {
        list-style: none;
    }
</style>