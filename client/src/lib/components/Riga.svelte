<script>
	export let label_text = '';
	export let placeholder = '';
	export let name = '';
	export let type = '';
</script>

<div class="mb-5">
	<label for={name} class="text-lg text-slate-300 font-mono">{label_text}</label>
	<input
		{placeholder}
		{name}
		id={name}
		{type}
		class="font-mono text-slate-200 transition mt-3 duration-150 w-full p-2 pl-3 rounded-xl bg-slate-800 outline outline-2 outline-slate-200/25 caret-pink-400 focus:outline-pink-400/55 focus:ring-4 focus:ring-pink-200/55"
	/>
</div>
