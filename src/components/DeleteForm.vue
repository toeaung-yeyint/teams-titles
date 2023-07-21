<template>
	<h2 class="text-xl font-bold uppercase mb-8 text-center dark:text-gray-300">
		Please confirm to delete the team.
	</h2>
	<div class="flex justify-center gap-x-6">
		<Button label="Confirm" @click="deleteTeam" type="delete" />
		<Button label="Cancel" @click="handleCancel" type="secondary" />
	</div>
</template>

<script>
import Button from "./Button.vue";
import { db, storage } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import snackbar from "snackbar";
import { ref, deleteObject } from "firebase/storage";
export default {
	components: { Button },
	props: ["deleteDoc"],
	emits: ["cancel", "confirm"],
	methods: {
		handleCancel() {
			this.$emit("cancel");
		},
		async deleteTeam() {
			const storageRef = ref(storage, this.deleteDoc);
			await deleteObject(storageRef);
			const docRef = doc(db, "teams", this.deleteDoc);
			this.$emit("confirm");
			await deleteDoc(docRef).then(() => {
				snackbar.show("The team has been deleted successfully!");
			});
		},
	},
};
</script>
