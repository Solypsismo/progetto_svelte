<script>
	// @ts-nocheck

	export let immagine_profilo;
	export let username;
	export let nome;

	function handleClick(event) {
		const username = event.target.closest('.profile-info').getAttribute('data-username');
		window.location.href = '/search/' + username;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	data-username={username}
	class="w-full outline outline-1 h-[100px] flex flex-row profile-info"
>
	<div class="avatar aspect-square flex justify-center items-center" on:click={handleClick}>
		<div class="w-16 rounded-full">
			<img
				src={immagine_profilo.startsWith('https')
					? immagine_profilo
					: 'https://192.168.43.42/' + immagine_profilo}
				alt="immagine-profilo"
			/>
		</div>
	</div>

	<div class="flex-1" on:click={handleClick}>
		<div class="flex flex-col p-5 gap-2">
			<div>
				{username}
			</div>

			<div>
				{nome}
			</div>
		</div>
	</div>

	<slot name="chat"></slot>
</div>
