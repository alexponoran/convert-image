<script lang="ts">
	export let format = 'jpg' as 'jpg' | 'png' | 'webp' | 'avif';
</script>

<div class="space-y-0.5">
	<label for="img-format"> Desired format </label>
	<select id="img-format" bind:value={format} class="select">
		<option value="jpg">JPG</option>
		<option value="png">PNG</option>
		<option value="webp">WEBP</option>
		<option value="avif">AVIF</option>
	</select>
</div>
