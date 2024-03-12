<script>
	// @ts-nocheck
	import { formattaData } from '$lib/action/utility';

	import Immagine from '$lib/static/immagine.jpg';
	export let id_utente_post = null;
	export let id_user;
	export let path;
	export let username;
	export let descrizione;
	export let data;
	export let handleClick = null;
	export let avatar_path = null;

	let promise = null;
	function elimina() {
		promise = handleClick();
	}

	const dataFormattata = formattaData(data);
</script>

{#await promise then risultato}
	{#if risultato === true}
		<div class="toast toast-center toast-middle">
			<div class="alert alert-success">
				<span>Post eliminato con successo</span>
			</div>
		</div>
	{:else if risultato === false}
		<div class="toast toast-center toast-middle">
			<div class="alert alert-error">
				<span>Richiesta fallita. Riprova.</span>
			</div>
		</div>
	{/if}
{/await}
<div class="h-[600px] w-screen">
	<div class="header-post h-[50px] flex place-content-between">
		<div class="avatar-e-nome flex">
			<div class="avatar p-1 pl-3 w-20">
				<div class="rounded-full">
					<img
						alt="immagine-profilo"
						src={avatar_path.startsWith("https") ? avatar_path : `https://192.168.43.42/${avatar_path}`}
					/>
				</div>
			</div>

			<div class="flex items-center">{username}</div>
		</div>

		<div class="flex items-center">
			<div class="dropdown dropdown-bottom dropdown-end">
				<div
					tabindex="0"
					role="button"
					class="btn m-1 bg-transparent border-0 hover:bg-transparent"
				>
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
							d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
						/>
					</svg>
				</div>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul
					tabindex="0"
					class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
				>
					{#if id_utente_post == id_user}
						<li>
							<button on:click={elimina} class="btn btn-outline btn-error"
								><svg
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
										d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
									/>
								</svg>
								Delete</button
							>
						</li>
					{/if}
				</ul>
			</div>
		</div>
	</div>
	<div class="h-[350px]">
		<img
			src={path ? `https://192.168.43.42/` + path : Immagine}
			alt="post-immagine"
			class="object-cover h-full w-full"
		/>
	</div>
	<div class="h-[50px] flex place-content-between">
		<div class="flex items-center h-full gap-4 p-4">
			<button
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 hover:fill-red-600"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
					/>
				</svg>
			</button>

			<button
				><svg
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
						d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
					/>
				</svg>
			</button>

			<button
				><svg
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
						d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
					/>
				</svg>
			</button>
		</div>

		<div class="h-full flex items-center p-5">
			<button
				><svg
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
						d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
					/>
				</svg>
			</button>
		</div>
	</div>

	<div class="max-h-[100px] px-3">
		{descrizione}
	</div>

	<div class="h-[50px] flex items-center px-3">
		{dataFormattata}
	</div>
</div>
