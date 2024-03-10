<script>
// @ts-nocheck
    export let active = false;
    export let text;
    export let link;

    function handleClick() {
        window.location.href = link;
    }
</script>

<button class:active={active} on:click={handleClick}>
    <slot/>
    <span class="btm-nav-label">{text}</span>
</button>