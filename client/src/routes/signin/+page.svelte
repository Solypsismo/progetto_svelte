<script>
	import Riga from '$lib/components/Riga.svelte';

	export let data;
</script>

<main class="flex justify-center items-center w-screen h-screen bg-slate-800">
	<form
		action="?/register"
		method="POST"
		class=" max-w-[500px] p-5 bg-slate-900 rounded-2xl shadow-black shadow-lg"
	>
		<div class="form-contaier w-full">
			<h1 class=" text-slate-100 text-4xl font-mono">Registrati</h1>

			<div class="campi-form mt-10">
				<div class="flex gap-3">
					<Riga type="text" placeholder="Nome" label_text="Nome :" name="nome"></Riga>
					<Riga type="text" placeholder="Cognome" label_text="Cognome :" name="cognome"></Riga>
				</div>

				<Riga type="text" placeholder="Username" label_text="Username :" name="username"></Riga>
				<Riga type="email" placeholder="email@example.com" label_text="Email :" name="email"></Riga>
				<Riga type="password" placeholder="Password" label_text="Password :" name="password"></Riga>

				<div class=" mt-10">
					<button
						class="text-white w-full bg-teal-400 p-3 hover:text-white hover:outline hover:outline-1 rounded-md focus:outline-4 hover:outline-white"
						>Accedi</button
					>
				</div>

				<div class="mt-3">
					Sei già registrato? <a href="/login" class="text-teal-400 underline">Accedi</a>
				</div>
			</div>
		</div>
	</form>
</main>
