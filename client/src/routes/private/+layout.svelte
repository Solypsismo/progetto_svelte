<script>

	// @ts-nocheck

	import ModalLogout from '$lib/components/modal_logout.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import { setTheme } from '$lib/action/utility.js';

	export let data;

	setTheme(localStorage.getItem("tema") ? localStorage.getItem("tema") : "default");
</script>

<ModalLogout></ModalLogout>
<main class="flex flex-col h-screen">
	<Navbar avatar_path={data.avatar_path} username={data.username}></Navbar>

	<slot />
</main>
