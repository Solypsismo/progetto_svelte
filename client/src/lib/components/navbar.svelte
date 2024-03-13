<script>
	// @ts-nocheck
	import ModalTemi from './modal_temi.svelte';
	export let username;
	export let avatar_path;
</script>

<ModalTemi></ModalTemi>
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
											: `https://192.168.1.161/${avatar_path}`}
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
			<a class="btn btn-ghost text-xl">MySocial</a>
		</div>
		<div class="navbar-end">
			<div>
				<!-- svelte-ignore missing-declaration -->
				<button
					class="transition duration-300 btn btn-ghost btn-circle"
					on:click={() => (window.location.href = '/search')}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/></svg
					>
				</button>
			</div>

			<button class="btn btn-ghost btn-circle">
				<div class="indicator">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
						/></svg
					>
					<span class="badge badge-xs badge-primary indicator-item"></span>
				</div>
			</button>
		</div>
	</div>
</header>
