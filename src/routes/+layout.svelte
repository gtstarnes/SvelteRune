<script lang="ts">
	import Footer from "../components/Footer.svelte";
import Header from "../components/Header.svelte";
import '../styles/app.css';


</script>

<main>
    <Header />
    <slot></slot>
    <Footer />
</main>

<style>

</style>