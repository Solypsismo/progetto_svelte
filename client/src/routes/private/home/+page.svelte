<script>
	// @ts-nocheck
	import BottomNav from '$lib/components/NavInf/BottomNav.svelte';
	import Post from '$lib/components/post/Post.svelte';
	
	export let data;

	console.log(data);
</script>

<div class="flex-1 overflow-y-auto">

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
				></Post>
			{/each}
		{/each}
	{:else}
		<div>Inizia a farti degli amici!</div>
	{/if}
</div>

<!-- <div> -->
<BottomNav bottone_attivo="home"></BottomNav>
	<!-- <input type="text" bind:value={message} /> <button class="btn" on:click={test}>cliccami</button>
</div> -->
