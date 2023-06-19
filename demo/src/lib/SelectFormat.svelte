<script lang="ts">
	export let format = 'jpg' as 'jpg' | 'png' | 'webp' | 'avif';
	export let id = '';
</script>

<div class="space-y-0.5">
	<label for={id}> Desired format </label>
	<select {id} bind:value={format} class="select">
		<option value="jpg">JPG</option>
		<option value="png">PNG</option>
		<option value="webp">WEBP</option>
		<option value="avif">AVIF</option>
	</select>
</div>
