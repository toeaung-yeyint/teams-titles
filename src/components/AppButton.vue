<template>
	<button :class="{ reset: type === 'reset' }">{{ label }}</button>
</template>

<script>
export default {
	props: ["label", "type"],
};
</script>

<style scroped>
button {
	background: #404040;
	outline: 0;
	border: 0;
	color: white;
	padding: 10px 20px;
	text-transform: uppercase;
	cursor: pointer;
}
button:hover {
	background: black;
}
.reset {
	background: #ef4444;
}
.reset:hover {
	background: red;
}
</style>
