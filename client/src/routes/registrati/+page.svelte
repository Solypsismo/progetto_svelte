<script>
	import { setTheme } from '$lib/action/utility';
	import Registrati from '$lib/static/registrazione.jpg';

	setTheme(localStorage.getItem('tema') ? localStorage.getItem('tema') : 'nord');
</script>

<main class="w-screen h-screen md:grid md:grid-cols-2 overflow-clip">
	<div class="w-full h-full flex justify-center items-center">
		<div class="glass max-w-[500px] p-5">
			<div class="text-lg font-bold my-5 px-5">Registrati</div>
			<form method="POST" action="?/register">

				<label class="input input-bordered flex items-center gap-2 my-4">
					Nome  
					<input type="text" name="nome" class="grow" placeholder="Mario" />
				</label>

				<label class="input input-bordered flex items-center gap-2 my-4">
					Cognome					  
					<input type="text" name="cognome" class="grow" placeholder="rossi" />
				</label>

				<label class="input input-bordered flex items-center gap-2 my-4">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
					  </svg>
					<input type="text" name="username" class="grow" placeholder="Your username" />
				</label>

				<label class="input input-bordered flex items-center gap-2 my-4">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
					  </svg>
					<input type="text" name="email" class="grow" placeholder="email@example.it" />
				</label>

				<label class="input input-bordered flex items-center gap-2 my-4">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
					  </svg>
					  
					<input type="password" name="password" class="grow" placeholder="password" />
				</label>

				<button class="btn btn-outline btn-accent w-full">Registrati</button>

				<div class="mt-2">
					Hai già un account? <a
						href="/login"
						class="underline text-sky-400 cursor-pointer">Accedi</a
					>
				</div>
			</form>
		</div>
	</div>

	<div class="hidden md:block w-full h-full">
		<img src={Registrati} class="object-cover" alt="sfondo" />
	</div>
</main>
