<script>
	// @ts-nocheck
	function handleClick(event) {
		localStorage.setItem("tema", event.target.value);
		document.documentElement.setAttribute('data-theme', event.target.value);
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<dialog id="theme_modal" class="modal p-3" >
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="modal-box flex flex-col gap-3 w-full w-max-[500px]" on:click={handleClick}>
		<input type="button" class="btn btn-outline" value="default" />
		<input type="button" class="btn btn-outline btn-info" value="aqua" />
		<input type="button" class="btn btn-outline btn-warning" value="cyberpunk" />
		<input type="button" class="btn btn-outline btn-accent" value="nord" />
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
