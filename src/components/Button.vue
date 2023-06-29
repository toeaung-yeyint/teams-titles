<template>
	<button :class="buttonClasses">
		{{ label }}
	</button>
</template>

<script>
export default {
	props: ["label", "type"],
	computed: {
		buttonClasses() {
			return {
				secondary: this.type === "secondary",
			};
		},
	},
};
</script>

<style scroped>
button {
	background: #52525b;
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
.secondary {
	background: white;
	color: #404040;
	border: 1px solid black;
}
.secondary:hover {
	background: #f5f5f5;
}
</style>
