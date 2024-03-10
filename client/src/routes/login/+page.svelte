<script>
// @ts-nocheck
	import Riga from '$lib/components/Riga.svelte';
</script>

<main class="flex justify-center items-center w-screen h-screen bg-slate-800">
	<form
		method="POST"
		action="?/login"
		class=" max-w-[500px] p-5 bg-slate-900 rounded-2xl shadow-black shadow-lg"
	>
		<div class="form-contaier w-full">
			<h1 class=" text-slate-100 text-4xl font-mono">Accedi</h1>

			<div class="campi-form mt-10">
				<Riga type="text" placeholder="Username" label_text="Username :" name="username"></Riga>
				<Riga type="password" placeholder="Password" label_text="Password :" name="password"></Riga>

				<div class=" mt-10">
					<button
						type="submit"
						class="text-white w-full bg-teal-400 p-3 hover:text-white hover:outline hover:outline-1 rounded-md focus:outline-4 hover:outline-white"
						>Accedi</button
					>
				</div>

				<div class="mt-3">
					Non sei ancora registrato? <a href="/signin" class="text-teal-400 underline">Registrati</a
					>
				</div>
			</div>
		</div>

	</form>
</main>
