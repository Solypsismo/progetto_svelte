<script>
	// @ts-nocheck
    import { page } from "$app/stores";
	import ModalLogout from "./modal_logout.svelte";
 
	import ModalTemi from './modal_temi.svelte';
	export let username;
	export let avatar_path;
    export let destinatario;
</script>

<ModalTemi></ModalTemi>
<ModalLogout></ModalLogout>
<header>
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<div class="drawer z-10">
				<input id="my-drawer" type="checkbox" class="drawer-toggle" />
				<div class="drawer-content">
					<!-- Page content here -->
					<label for="my-drawer" class="btn bg-transparent drawer-button"
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
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</label>
				</div>
				<div class="drawer-side">
					<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
					<ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
						<!-- Sidebar content here -->
						<li>
							<button class="btn btn-outline btn-info" onclick="theme_modal.showModal()"
								>Seleziona tema</button
							>
						</li>
						<li class="mt-3">
							<button class="btn btn-outline btn-error" onclick="my_modal_2.showModal()"
								>Logout</button
							>
						</li>

						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							class="fixed bottom-0 p-4 flex gap-4 w-full"
							on:click={() => {
								window.location.href = '/private/user';
							}}
						>
							<div class="avatar">
								<div class="w-12 mask mask-squircle">
									<img
										alt="foto-profilo"
										src={avatar_path.startsWith('https')
											? avatar_path
											: `https://192.168.43.42/${avatar_path}`}
									/>
								</div>
							</div>

							<div class="flex justify-center items-center">{username}</div>
						</div>
					</ul>
				</div>
			</div>
		</div>
		<div class="navbar-center">
			<span class="btn btn-ghost text-xl">{destinatario}</span>
		</div>
		<div class="navbar-end">
			
		</div>
	</div>
</header>
