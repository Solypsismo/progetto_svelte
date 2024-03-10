<dialog id="post_modal" class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg">Crea un nuovo post</h3>

		<form method="post" enctype="multipart/form-data" class="w-full">
			<input
				type="file"
				name="image"
				class="file-input file-input-bordered file-input-md w-full mt-3"
			/>

			<textarea
				class="textarea textarea-primary w-full mt-3"
				placeholder="Inserisci una descrizione"
				name="descrizione"
			></textarea>
			<div class="grid grid-cols-2 w-full justify-center gap-3 mt-5">
				<div class="w-full">
					<button formaction="?/PostUpload" class="btn btn-primary w-full">Salva</button>
				</div>

				<div class="w-full">
					<button type="button" class="btn btn-accent w-full" onclick="post_modal.close()">Chiudi</button>
				</div>
			</div>
		</form>
	</div>
</dialog>
