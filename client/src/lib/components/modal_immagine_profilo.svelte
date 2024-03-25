<script>
// @ts-nocheck

	export let biografia;
	export let value_immagine = undefined;
</script>

<dialog id="avatar_modal" class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg mb-3">Mofifica profilo</h3>

		<form method="post" enctype="multipart/form-data" class="w-full">
			<label for="image" class="btn btn-outline w-full">Seleziona immagine profilo</label>
			<input
				id="image"
				type="file"
				name="image"
				class="hidden"
				bind:value={value_immagine}
			/>
			<div class="w-full font-mono overflow-clip text-primary">{value_immagine === undefined ? "" : value_immagine}</div>

			<textarea
				class="textarea textarea-primary w-full mt-3"
				placeholder="Inserisci una nuova Biografia!"
				name="biografia"
				bind:value={biografia}
			></textarea>

			<div class="grid grid-cols-2 w-full justify-center gap-3 mt-5">
				<div class="w-full">
					<button formaction="?/ChangeProfilePic" class="btn btn-primary w-full">Salva</button>
				</div>

				<div class="w-full">
					<button type="button" class="btn btn-accent w-full" onclick="avatar_modal.close()">Annulla</button>
				</div>
			</div>
		</form>
	</div>
</dialog>
