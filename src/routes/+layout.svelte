<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<section>
	<Navbar />
	<main>
		<slot />
	</main>
	<Footer />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}
</style>
