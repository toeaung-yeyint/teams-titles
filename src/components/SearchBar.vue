<template>
	<form @submit.prevent="handleSearch">
		<input type="text" placeholder="Search..." v-model="teamName" required />
		<button type="submit">
			<i class="fa-solid fa-magnifying-glass"></i>
		</button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			teamName: "",
			team: null,
		};
	},
	methods: {
		handleSearch() {
			this.$emit("showResult", this.teamName);
			this.teamName = "";
		},
	},
};
</script>

<style scoped>
form {
	display: flex;
	border: 1px solid #404040;
	flex-grow: 1;
	box-sizing: border-box;
}
form input {
	flex-grow: 1;
	outline: 0;
	border: 0;
	padding: 0 20px;
}
form:focus-within {
	outline: 2px solid black;
}
</style>
