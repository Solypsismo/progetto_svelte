<script>
	// @ts-nocheck
	import BottomNav from '$lib/components/NavInf/BottomNav.svelte';
	import Post from '$lib/components/post/Post.svelte';

	export let data;

	console.log(data);
</script>

<div class="flex-1 overflow-y-auto">
	<!-- export let id_utente_post;
	export let id_user;
	export let path;
	export let username;
	export let descrizione;
	export let data;
	export let handleClick; -->

	{#if data.amici.length}
		{#each data.amici as amico}
			{#each amico.posts as post}
				<Post   
					id_post={post._id}
					like={post.liked}
                    id_user="none" 
                    path={post.path} 
                    username={amico.username}
                    descrizione={post.descrizione}
                    data={post.data_pubblicazione}
                    avatar_path={amico.avatar_path}
                >
                </Post>
			{/each}
		{/each}
	{:else}
		<div>Inizia a farti degli amici!</div>
	{/if}
</div>

<BottomNav bottone_attivo="home"></BottomNav>
