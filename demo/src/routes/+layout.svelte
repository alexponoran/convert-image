<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
</script>

<svelte:head>
	<title>Convert-Image Demo</title>
	<meta
		name="description"
		content="Demo for the convert-image package, a small library that utilizes the native image decoding capabilities of web browsers to seamlessly convert images between the webp, avif, jpeg, and png formats."
	/>
</svelte:head>
<header class="sm:text-3xl text-2xl font-montserrat text-center py-4 h-16">
	Demo for the <strong>convert-image</strong> package
</header>
<main class="min-h-screen flex items-center font-montserrat justify-around flex-col">
	<slot />
</main>
<footer class="h-8 py-4 text-center font-montserrat">
	Made by <a
		class="underline underline-offset-3 hover:text-primary-100 transition"
		target="_blank"
		rel="noopener noreferrer"
		href="https://alexponoran.com"
	>
		Alex Ponoran
	</a>. See the documentation on
	<a
		class="underline underline-offset-3 hover:text-primary-100 transition"
		target="_blank"
		rel="noopener noreferrer"
		href="https://github.com/alexponoran/convert-image"
	>
		Github
	</a>.
</footer>
