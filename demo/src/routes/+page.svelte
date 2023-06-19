<script lang="ts">
	import ConvertImgLink from '$lib/ConvertImgLink.svelte';
	import ConvertImgFile from '$lib/ConvertImgFile.svelte';
</script>

<section>
	<h1 class="text-2xl sm:text-3xl text-center py-4">From link</h1>
	<ConvertImgLink />
</section>
<section>
	<h1 class="text-2xl sm:text-3xl text-center py-4">From input file</h1>
	<ConvertImgFile />
</section>
