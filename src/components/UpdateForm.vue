<template>
	<h2>Update the team details</h2>
	<form @submit.prevent="updateTeam" ref="updateForm">
		<div class="input-field">
			<label for="name">Name:</label>
			<input
				v-model="currentName"
				id="name"
				type="text"
				required
				placeholder="e.g. Real Madrid"
			/>
		</div>
		<div class="input-field">
			<label for="winningYears">Winning Years:</label>
			<input
				v-model="currentWinningYears"
				id="winningYears"
				type="text"
				pattern="\d{4}(,\d{4})*"
				title="e.g. 2022,2023"
				required
				placeholder="e.g. 2022,2023"
			/>
		</div>
		<Button label="update" type="update" />
		<i class="fa-solid fa-xmark" @click="handleClose"></i>
	</form>
</template>

<script>
import Button from "./Button.vue";
import { db } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";

export default {
	components: { Button },
	props: ["updateDoc"],
	emits: ["update", "close"],
	data() {
		return {
			name: "",
			winningYears: "",
		};
	},
	computed: {
		currentName: {
			get() {
				return this.updateDoc?.name ?? "";
			},
			set(value) {
				this.updateDoc.name = value;
			},
		},
		currentWinningYears: {
			get() {
				return this.updateDoc?.winningYears ?? "";
			},
			set(value) {
				this.updateDoc.winningYears = value;
			},
		},
	},
	methods: {
		async updateTeam() {
			this.name = this.currentName.trim();
			this.winningYears = this.currentWinningYears.toString().split(",");
			this.winningYears = this.winningYears.map((year) =>
				Number.parseInt(year)
			);

			const docRef = doc(db, "teams", this.updateDoc.id);
			await updateDoc(docRef, {
				name: this.name,
				winningYears: this.winningYears,
			});
			this.name = "";
			this.winningYears = "";
			this.$refs.updateForm.reset();
			this.$emit("update");
		},
		handleClose() {
			this.$emit("close");
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
.input-field {
	margin-bottom: 30px;
}
.input-field-logo {
	display: flex;
	flex-direction: column;
	margin: 40px 0;
}
label {
	padding: 0 5px;
	color: #505050;
	display: inline;
}
input#name,
input#winningYears {
	color: #505050;
	box-sizing: border-box;
	padding: 10px;
	outline: 0;
	width: 100%;
	border: 0;
	background: transparent;
	border-bottom: 1px solid #505050;
}
input#name:focus,
input#winningYears:focus {
	border-bottom: 2px solid black;
}
Button {
	width: 100%;
}
i {
	position: absolute;
	top: 15px;
	right: 15px;
	font-size: 1.5rem;
	cursor: pointer;
	color: red;
}
.warning-text {
	font-size: 0.8rem;
	color: red;
	margin: 15px 0 0 0;
	padding-left: 5px;
}
</style>
