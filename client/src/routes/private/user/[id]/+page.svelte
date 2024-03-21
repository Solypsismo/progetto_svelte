<script>
	// @ts-nocheck
	export let data;
	export let form;

	console.log(form);
	console.log(data);
	import BottomNav from '$lib/components/NavInf/BottomNav.svelte';
	import Post from '$lib/components/post/Post.svelte';
	import { page } from '$app/stores';
	const { id } = $page.params;

	const deletePost = async () => {
		const resJSON = await fetch(`http://192.168.43.42:3000/post/api/delete/${id}`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${data.token}`
			}
		});

		const res = await resJSON.json();

		if (res.success) {
			return true;
		} else {
            return false;
        }
	};
</script>

<div class="flex-1 overflow-y-auto">
	<Post
		id_post={data.post._id}
		path={data.post.path}
		username={data.username}
		data={data.post.data_pubblicazione}
		id_utente_post={data.post.user_id}
		id_user={data._id}
		descrizione={data.post.descrizione}
		handleClick={deletePost}
		avatar_path={data.avatar_path}
		like={data.post.liked}
	></Post>
</div>

<BottomNav bottone_attivo="user"></BottomNav>
