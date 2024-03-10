<dialog id="avatar_modal" class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg">Cambia l'immagine del profilo</h3>

		<form method="post" enctype="multipart/form-data" class="w-full">
			<input
				type="file"
				name="image"
				class="file-input file-input-bordered file-input-md w-full mt-3"
			/>

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
