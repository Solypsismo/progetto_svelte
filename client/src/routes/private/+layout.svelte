<script>
	// @ts-nocheck

	import ModalLogout from '$lib/components/modal_logout.svelte';
	export let data;
	// @ts-nocheck
	let ricerca = false;
</script>

<ModalLogout></ModalLogout>
<main class="flex flex-col h-screen">
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
								<div class="dropdown">
									<div tabindex="0" role="button" class="btn m-1">
										Theme
										<svg
											width="12px"
											height="12px"
											class="h-2 w-2 fill-current opacity-60 inline-block"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 2048 2048"
											><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"
											></path></svg
										>
									</div>
									<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
									<ul
										tabindex="0"
										class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
									>
										<li>
											<input
												type="radio"
												name="theme-dropdown"
												class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
												aria-label="Default"
												value="default"
											/>
										</li>
										
										<li>
											<input
												type="radio"
												name="theme-dropdown"
												class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
												aria-label="Cyberpunk"
												value="cyberpunk"
											/>
										</li>
										<li>
											<input
												type="radio"
												name="theme-dropdown"
												class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
												aria-label="Pamela"
												value="valentine"
											/>
										</li>
									</ul>
								</div>
							</li>
							<li class="mt-10">
								<button class="btn btn-outline btn-error" onclick="my_modal_2.showModal()"
									>Logout</button
								>
							</li>

							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<div class="fixed bottom-0 p-4 flex gap-4 w-full" on:click={() => {window.location.href = "/private/user"}}>
								<div class="avatar">
									<div class="w-12 mask mask-squircle">
										<img
											alt="foto-profilo"
											src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
										/>
									</div>
								</div>

								<div class="flex justify-center items-center">{data.username}</div>
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
						class:hidden={ricerca}
						on:click={() => (ricerca = !ricerca)}
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

					<div class="transition duration-300" class:hidden={!ricerca}>
						<div class="join outline outline-1 outline-slate-100/15">
							<input
								class="input join-item border-e border-slate-100/15 p-2"
								placeholder="Search"
							/>
							<button class="join-item p-2" on:click={() => (ricerca = !ricerca)}
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-6 h-6"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>
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

	<slot />
</main>
