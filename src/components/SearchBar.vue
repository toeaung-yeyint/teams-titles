<template>
	<form @submit.prevent>
		<input
			type="text"
			placeholder="Search..."
			required
			v-model="teamName"
			@input="updateTeamName"
		/>
		<i class="fa-solid fa-magnifying-glass"></i>
	</form>
</template>

<script>
export default {
	data() {
		return {
			teamName: "",
		};
	},
	methods: {
		updateTeamName() {
			this.$emit("update", this.teamName);
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
	align-items: center;
}
form input {
	flex-grow: 1;
	outline: 0;
	border: 0;
	width: 200px;
	padding-left: 20px;
}
form i {
	font-size: 1.2rem;
	padding: 5px 10px;
	color: #404040;
}
form:focus-within {
	outline: 4px solid rgba(100, 116, 139, 0.5);
}
</style>
