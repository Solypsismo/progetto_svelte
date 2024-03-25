<script>
	import { setTheme } from '$lib/action/utility';
	import Background from '$lib/static/background.jpg';

	setTheme(localStorage.getItem('tema') ? localStorage.getItem('tema') : 'nord');
</script>

<main class="w-screen h-screen md:grid md:grid-cols-2 overflow-clip">
	<div class="hidden md:block w-full h-full">
		<img src={Background} class="object-cover" alt="sfondo" />
	</div>

	<div class="w-full h-full flex justify-center items-center">
		<div class="glass max-w-[500px] p-3">
            <div class="text-lg font-bold my-5 px-5">Accedi</div>
			<form method="POST" action="?/login">
				<label class="input input-bordered flex items-center gap-2 my-4">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
					  </svg>
					<input autocomplete="off" type="text" name="username" class="grow" placeholder="Username" />
				</label>

				<label class="input input-bordered flex items-center gap-2 my-4">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
					  </svg>
					<input autocomplete="off" type="password" name="password" class="grow" placeholder="password" />
				</label>

                <button class="btn btn-outline btn-accent w-full">Accedi</button>

                <div>Non hai ancora un account? <a href="/registrati" class="underline text-sky-400 cursor-pointer">Registrati</a></div>
			</form>
		</div>
	</div>
</main>
