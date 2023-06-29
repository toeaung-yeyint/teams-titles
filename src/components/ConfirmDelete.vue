<template>
	<h2>Please confirm to delete the team.</h2>
	<div class="buttons">
		<Button label="Confirm" @click="deleteTeam" />
		<Button label="Cancel" @click="handleCancel" type="secondary" />
	</div>
</template>

<script>
import Button from "./Button.vue";
import { db } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import snackbar from "snackbar";
export default {
	components: { Button },
	props: ["deleteDoc"],
	emits: ["cancel", "confirm"],
	methods: {
		handleCancel() {
			this.$emit("cancel");
		},
		deleteTeam() {
			const docRef = doc(db, "teams", this.deleteDoc);
			this.$emit("confirm");
			deleteDoc(docRef).then(() => {
				snackbar.show("The team has been deleted successfully!");
			});
		},
	},
};
</script>

<style scoped>
h2 {
	text-align: center;
}
.buttons {
	display: flex;
	justify-content: center;
	gap: 20px;
}
</style>
