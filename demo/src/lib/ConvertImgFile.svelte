<script lang="ts">
	import convertImage from 'convert-image';
	import { FileDropzone } from '@skeletonlabs/skeleton';
	import SelectFormat from './SelectFormat.svelte';
	let format = 'jpg' as 'jpg' | 'png' | 'webp' | 'avif';
	function onChangeHandler(e: Event): void {
		const target = e.target as HTMLInputElement;
		const files = target.files as FileList;
		const file = files[0];
		const fileName = 'output';
		convertImage(file, fileName, format);
	}
</script>

<div class="space-y-2.5">
	<SelectFormat bind:format />
	<FileDropzone
		class="w-72 sm:w-96 p-16"
		on:change={onChangeHandler}
		name="files"
		accept="image/png, image/jpeg, image/webp, image/avif"
	>
		<svelte:fragment slot="lead">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-full h-12"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
				/>
			</svg>
		</svelte:fragment>
		<svelte:fragment slot="message">Upload a file or drag and drop</svelte:fragment>
		<svelte:fragment slot="meta">JPG, PNG, WEBP and AVIF allowed.</svelte:fragment>
	</FileDropzone>
</div>
