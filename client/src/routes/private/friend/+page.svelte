<script>
	import BottomNav from '$lib/components/NavInf/BottomNav.svelte';
	import CardUtente from '$lib/components/card_utente.svelte';

	export let data;

	console.log(data);
</script>

<div class="flex-1 overflow-y-auto mt-1">
	{#if data.amici.length > 0}
		{#each data.amici as utente}
			<CardUtente
				immagine_profilo={utente.avatar_path}
				username={utente.username}
				nome={utente.nome}
			></CardUtente>
		{/each}
	{/if}
</div>

<BottomNav bottone_attivo="friends"></BottomNav>
