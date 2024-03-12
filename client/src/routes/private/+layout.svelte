<script>
	// @ts-nocheck

	import ModalLogout from '$lib/components/modal_logout.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	export let data;
</script>

<ModalLogout></ModalLogout>
<main class="flex flex-col h-screen">
	<Navbar avatar_path={data.avatar_path} username={data.username}></Navbar>

	<slot />
</main>
