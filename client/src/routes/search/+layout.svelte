<script>
	import { setTheme } from "$lib/action/utility";
    setTheme(localStorage.getItem("tema") ? localStorage.getItem("tema") : "default");
</script>

<slot></slot>