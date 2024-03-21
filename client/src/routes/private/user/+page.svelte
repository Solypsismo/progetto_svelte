<script>
	// @ts-nocheck

	import BottomNav from '$lib/components/NavInf/BottomNav.svelte';
	import ModalImmagineProfilo from '$lib/components/modal_immagine_profilo.svelte';
	export let data;
	//FIXME: rimuovi in produzione
	console.log(data);

	function handleClick(event) {
		const element = event.target;
		const id = element.getAttribute('data-id-immagine');

		window.location.href = `user/${id}`;
	}
</script>

<ModalImmagineProfilo biografia={data.biografia}></ModalImmagineProfilo>
<div class="flex-1 overflow-y-auto">
	<div class="flex p-2">
		<div class="indicator">
			<button onclick="avatar_modal.showModal()">
				<span class="indicator-item indicator-bottom badge badge-secondary">+</span>
				<div class="avatar">
					<div class="w-24 mask mask-hexagon">
						<img
							alt="immagine-profilo"
							src={data.avatar_path.startsWith("https") ? data.avatar_path : `https://192.168.43.42/${data.avatar_path}`}
						/>
					</div>
				</div>
			</button>
		</div>

		<div class="stats shadow flex-1">
			<div class="stat place-items-center">
				<div class="stat-title">Amici</div>
				<div class="stat-value">{data.num_amici}</div>
			</div>

			<div class="stat place-items-center">
				<div class="stat-title text-secondary">Post</div>
				<div class="stat-value text-secondary">{data.post.length}</div>
			</div>
		</div>
	</div>

	<div class="p-2">
		{#if data.biografia.length > 0}
			{data.biografia}
		{:else}
			Inserisci una bio!
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

		{#if data.post.length > 0}
			<div class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
				{#each data.post as post}
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<!-- svelte-ignore a11y-unknown-role -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						on:click={handleClick}
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
		{:else}
			Inserisci il tuo primo post
		{/if}
	</div>
</div>

<BottomNav bottone_attivo="user"></BottomNav>
