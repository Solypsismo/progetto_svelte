<script>
	// @ts-nocheck
	export let data;
    console.log(data);
	import BottomNav from '$lib/components/NavInf/BottomNav.svelte';
	import Post from '$lib/components/post/Post.svelte';

    const utente = JSON.parse(localStorage.getItem("utente-cercato"));

    console.log(utente);
</script>

<div class="flex-1 overflow-y-auto">
	<Post
		like={data.post.liked}
		id_post={data.post._id}
		id_user="none"
		path={data.post.path}
		username={data.post.username}
		descrizione={data.post.descrizione}
		data={data.post.data_pubblicazione}
		avatar_path={utente.avatar_path}
	></Post>
</div>

<BottomNav bottone_attivo="friends"></BottomNav>
