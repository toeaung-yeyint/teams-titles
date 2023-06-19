<template>
	<h2>Add a new team</h2>
	<form @submit.prevent="addTeam" ref="addFrom">
		<div>
			<input
				v-model="name"
				id="name"
				type="text"
				required
				placeholder=" "
			/><label for="name">Name:</label>
		</div>
		<div>
			<input v-model="url" type="text" id="logo" required placeholder=" " />
			<label for="logo">Logo (url):</label>
		</div>
		<div>
			<input
				v-model="winningYears"
				id="years"
				type="text"
				pattern="\d{4}(,\s\d{4})*"
				title="e.g. 2022, 2023"
				required
				placeholder=" "
			/>
			<label for="years">Winning Years:</label>
		</div>
		<Button label="add" />
	</form>
</template>

<script>
import Button from "./Button.vue";
import db from "../firebase";
import { addDoc, collection } from "firebase/firestore";
export default {
	components: { Button },
	data() {
		return {
			name: "",
			url: "",
			winningYears: null,
		};
	},
	methods: {
		addTeam() {
			const colRef = collection(db, "teams");
			this.winningYears = this.winningYears.split(", ");
			this.winningYears = this.winningYears.map((year) =>
				Number.parseInt(year)
			);
			addDoc(colRef, {
				logo: this.url,
				name: this.name,
				winningYears: this.winningYears,
			}).then(() => {
				this.$refs.addFrom.reset();
				this.$emit("close");
			});
		},
	},
};
</script>

<style scoped>
h2 {
	color: black;
	text-align: center;
	text-transform: uppercase;
	margin: 0 0 30px 0;
}
div {
	position: relative;
	margin-bottom: 30px;
}
label {
	position: absolute;
	top: 10px;
	left: 0px;
	transition: all 0.5s ease-in-out;
	padding: 0 5px;
	pointer-events: none;
	color: #505050;
}
input {
	color: #505050;
	box-sizing: border-box;
	padding: 10px;
	outline: 0;
	width: 100%;
	border: 0;
	background: transparent;
	border-bottom: 1px solid #505050;
}
input:focus {
	border-bottom: 2px solid black;
}
input:focus + label,
input:not(:placeholder-shown) + label {
	top: -12px;
}
button {
	width: 100%;
}
</style>
