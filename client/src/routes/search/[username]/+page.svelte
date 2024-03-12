<script>
	// @ts-nocheck

	import BottomNav from '$lib/components/NavInf/BottomNav.svelte';
	import Navbar from '$lib/components/navbar.svelte';

	export let data;
	export let form;

	console.log(form);
	console.log(data);
</script>

<main class="flex flex-col h-screen">
	<Navbar username={data.me.username}></Navbar>

	<div class="flex-1 overflow-y-auto">
		<div class="flex p-2">
			<div class="avatar">
				<div class="w-24 mask mask-hexagon">
					<img
						alt="immagine-profilo"
						src={data.utente.avatar_path.startsWith('https')
							? data.utente.avatar_path
							: `https://192.168.43.42/${data.utente.avatar_path}`}
					/>
				</div>
			</div>

			<div class="stats shadow flex-1">
				<div class="stat place-items-center">
					<div class="stat-title">Amici</div>
					<div class="stat-value">{data.utente.num_amici}</div>
				</div>

				<div class="stat place-items-center">
					<div class="stat-title text-secondary">Post</div>
					<div class="stat-value text-secondary">{data.utente.posts.length}</div>
				</div>
			</div>
		</div>

		<div class="p-2">
			<div class="font-bold text-lg">
				{data.utente.username}
			</div>
			{#if data.utente.biografia.length > 0}
				{data.utente.biografia}
			{/if}
		</div>

		<div class="w-screen p-2">
			{#if data.res_form?.success}
				<div class="toast toast-top toast-center">
					<div class="alert alert-success">
						<span>{data.res_form.message}</span>
					</div>
				</div>
			{/if}

			<!-- //TODO: CREA TUTTI GLI ENDPOINT PER ACCETTARE/RIFIUTARE/ANNULLARE LA RICHIESTA -->
			{#if !data.status}
				<form method="POST" action="?/sendRequest">
					<button type="submit" class="btn btn-primary w-full"> Invia Richiesta </button>
				</form>
			{:else if data.status == 'io ho inviato la richiesta'}
				<button type="submit" class="btn btn-warning w-full"> Richiesta in attesa </button>
			{:else if data.status == 'mi e stata inviata la richiesta'}
				<div class="grid grid-cols-2 gap-2">
					<div>
						<form method="POST" action="?/acceptRequest">
							<button type="submit" class="btn btn-success w-full"> Accetta Richiesta </button>
						</form>
					</div>

					<div>
						<form method="POST" action="?/declineRequest">
							<button type="submit" class="btn btn-error w-full"> Rifiuta Richiesta </button>
						</form>
					</div>
				</div>
			{:else if data.status == "amici"}
				<button type="submit" class="btn btn-info w-full"> Siete amici </button>
			{/if}
		</div>

		<div class="w-screen">
			<div class="w-full flex justify-center items-center p-2 outline outline-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
					/>
				</svg>
			</div>

			{#if data.utente.posts.length > 0}
				<div class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
					{#each data.utente.posts as post}
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<!-- svelte-ignore a11y-unknown-role -->
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							on:click={() => {
								console.log('ciao');
							}}
							data-id-immagine={post._id}
							class="outline outline-1 outline-black aspect-square"
						>
							<img
								data-id-immagine={post._id}
								src={'https://192.168.43.42/' + post.path}
								alt="img"
								class="aspect-square"
							/>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<BottomNav bottone_attivo="friends"></BottomNav>
</main>
