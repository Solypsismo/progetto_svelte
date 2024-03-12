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
		<input type="button" class="btn bg-slate-700" value="default" />
		<input type="button" class="btn bg-pink-200 text-slate-800" value="valentine" />
		<input type="button" class="btn bg-yellow-200 text-slate-800" value="cyberpunk" />
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
