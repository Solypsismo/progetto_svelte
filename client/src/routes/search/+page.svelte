<script>
  	import SkeletonCardUtente from '$lib/components/SkeletonCardUtente.svelte';
	import BottomNav from '$lib/components/NavInf/BottomNav.svelte';
	import CardUtente from '$lib/components/card_utente.svelte';
	
	let search = '';

	// @ts-ignore
	const cerca = async (nome) => {
		if (nome == '') {
			return { success: false };
		}

		const resJSON = await fetch('http://localhost:3000/utente/api/cerca-utenti', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({ username: nome })
		});

		const res = await resJSON.json();

		if (res.success) {
			return { success: true, utenti: res.utenti };
		} else {
			return { success: false };
		}
	};

	$: utenti = cerca(search);
</script>

<main class="flex flex-col h-screen">
	<div class="navbar bg-base-100 justify-center">
		<div class="flex-none gap-2 w-full">
			<label class="w-full input input-bordered flex items-center gap-2">
				<input type="text" class="grow" placeholder="Search" bind:value={search} />
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					class="w-4 h-4 opacity-70"
					><path
						fill-rule="evenodd"
						d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
						clip-rule="evenodd"
					/></svg
				>
			</label>
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img
							alt="Tailwind CSS Navbar component"
							src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
						/>
					</div>
				</div>
				<ul
					tabindex="0"
					class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
				>
					<li>
						<a class="justify-between">
							Profile
							<span class="badge">New</span>
						</a>
					</li>
					<li><a>Settings</a></li>
					<li><a>Logout</a></li>
				</ul>
			</div>
		</div>
	</div>

	<div class="flex-1">
		{#await utenti}
			<SkeletonCardUtente></SkeletonCardUtente>
		{:then risultato}
			{#if risultato.success}
				{#each risultato.utenti as utente}
					<CardUtente
						immagine_profilo={utente.avatar_path}
						username={utente.username}
						nome={utente.nome}
					></CardUtente>
				{/each}
			{:else if search !== ''}
				nessun utente trovato
			{/if}
		{/await}
	</div>

	<BottomNav bottone_attivo="home" />
</main>
