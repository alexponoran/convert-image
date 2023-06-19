<script lang="ts">
	import convertImage from 'convert-image';
	import SelectFormat from './SelectFormat.svelte';
	let imageUrl = '';
	let format = 'jpg' as 'jpg' | 'png' | 'webp' | 'avif';
</script>

<form on:submit={() => convertImage(imageUrl, 'output', format)} class="w-72 sm:w-96 space-y-2.5">
	<div class="space-y-0.5">
		<label for="img-url">Image URL</label>
		<input bind:value={imageUrl} class="py-2.5 px-4 w-full input" id="img-url" type="text" />
	</div>
	<SelectFormat bind:format />
	<button aria-label="Convert Image" type="submit" class="btn variant-filled w-24">Convert</button>
</form>
