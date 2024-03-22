<script>

	// @ts-nocheck

	import Navbar from '$lib/components/navbar.svelte';
	import { setTheme } from '$lib/action/utility.js';

	export let data;

	import { createSocket } from '$lib/socket/index.js';
	const socket = createSocket(data.token);

	let ricevuto = null;
	let timeout;
	socket.on('message', (arg) => {
		clearTimeout(timeout);
		ricevuto = arg;
		console.log('nel client: ', arg);
		timeout = setTimeout(() => {
			ricevuto = null;
		}, 2000)
	});

	setTheme(localStorage.getItem("tema") ? localStorage.getItem("tema") : "default");
</script>

<main class="flex flex-col h-screen">
	<Navbar avatar_path={data.avatar_path} username={data.username}></Navbar>

	{#if ricevuto}
		<div class="toast toast-top toast-start z-30">
			<div class="alert alert-info">
				<span>{ricevuto}</span>
			</div>
		</div>
	{/if}

	<slot />
</main>
