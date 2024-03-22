<script>
	// @ts-nocheck
	export let data;
	import { page } from '$app/stores';
	import { setTheme } from '$lib/action/utility.js';
	import ChatNavbar from '$lib/components/ChatNavbar.svelte';

	import { createSocket, sendMessage } from '$lib/socket/index.js';

	const socket = createSocket(data.token)

	setTheme(localStorage.getItem('tema') ? localStorage.getItem('tema') : 'default');
	
	console.log(data);
	const username = $page.params.username;

	let message = '';

	let messages_sent = [];

	socket.on("message", (message) => {
		messages_sent.push({by: username, message});
		messages_sent = messages_sent;
	})

	function handleSubmit(event) {
		event.preventDefault();
		sendMessage(socket, message, username);
		messages_sent.push({ by: 'me', message });
		messages_sent = messages_sent;
		message = '';
	}
</script>

<main class="flex flex-col h-screen">
	<ChatNavbar username={data.username} avatar_path={data.avatar_path} destinatario={username}
	></ChatNavbar>

	<div class="flex-1" id="messages">
		{#each messages_sent as msg}
			{#if msg.by == 'me'}
				<div class="chat chat-end">
					<div class="chat-bubble chat-bubble-info">{msg.message}</div>
				</div>
			{:else}
				<div class="chat chat-start">
					<div class="chat-bubble chat-bubble-secondary">{msg.message}</div>
				</div>
			{/if}
		{/each}
	</div>

	<form on:submit={handleSubmit}>
		<div class="w-full p-3 flex gap-3">
			<input
				autocomplete="off"
				type="text"
				name="message"
				bind:value={message}
				class="input input-bordered input-secondary w-full"
			/>
			<button class="btn btn-primary">invia</button>
		</div>
	</form>
</main>
