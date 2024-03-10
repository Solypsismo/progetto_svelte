<script lang="ts">
    import { page } from '$app/stores';
	import { redirect } from '@sveltejs/kit';

    function load(){
        redirect(303, '/login');
    }
</script>

<h1>{$page.status}: {$page.error?.message} ziopera</h1>