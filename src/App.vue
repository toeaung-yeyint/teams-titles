<template>
	<div class="container">
		<h1>teams-titles</h1>
		<p>
			<strong>Built using: </strong>Vue (Options API), HTML, CSS, JavaScript,
			Firebase, Snackbar.js, Vite
		</p>
		<p>
			This fully-fledged Vue app allows users to view the winning history of top
			European football teams in the UEFA Champions League such as Real Madrid,
			Barcelona, Manchester United, Chelsea, Liverpool, Bayern Munich, AC Milan,
			Inter Milan, Juventus, Ajax, etc. Additionally, the app provides
			functionality for users to add new teams, update or remove existing ones.
		</p>
		<div class="app-functions">
			<SearchBar ref="searchBar" @update="handleTeamName" />
			<Button label="add a new team" @click="addTeam" />
			<Button label="reset" type="secondary" @click="reset" />
		</div>
		<div v-show="loaded" class="all-teams">
			<Team
				v-for="(team, index) in filteredTeam"
				:key="index"
				:id="team.id"
				:src="team.logo"
				:name="team.name"
				:winningYears="team.winningYears"
				@loaded="showTeams"
				@delete="askConfirm"
				@update="updateTeam"
			/>
		</div>
		<Modal ref="addForm"
			><AddForm @add="closeAddFrom" @close="closeAddModal"
		/></Modal>
		<Modal ref="updateForm"
			><UpdateForm
				:updateDoc="updateDoc"
				@close="closeUpdateModal"
				@update="closeUpdateForm"
		/></Modal>
		<Modal ref="deleteForm"
			><DeleteForm
				:deleteDoc="deleteDoc"
				@confirm="closeConfirmBox"
				@cancel="closeConfirmBox"
		/></Modal>
	</div>
</template>

<script>
import Button from "./components/Button.vue";
import Team from "./components/Team.vue";
import SearchBar from "./components/SearchBar.vue";
import AddForm from "./components/AddForm.vue";
import UpdateForm from "./components/UpdateForm.vue";
import DeleteForm from "./components/DeleteForm.vue";
import Modal from "./components/Modal.vue";
import { db } from "./firebase";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import snackbar from "snackbar";

export default {
	components: {
		Button,
		Team,
		SearchBar,
		AddForm,
		UpdateForm,
		DeleteForm,
		Modal,
	},
	data() {
		return {
			allTeams: [],
			updateDoc: null,
			deleteDoc: null,
			teamName: "",
			loaded: false,
		};
	},
	mounted() {
		let colRef = collection(db, "teams");
		colRef = query(colRef, orderBy("name"));
		onSnapshot(colRef, (snapshot) => {
			this.allTeams = [];
			snapshot.docs.forEach((doc) => {
				const docId = doc.id;
				doc = doc.data();
				doc.id = docId;
				this.allTeams.push(doc);
			});
		});
	},
	methods: {
		reset() {
			this.$refs.searchBar.$data.teamName = "";
			this.teamName = "";
		},
		handleTeamName(data) {
			this.teamName = data;
		},
		addTeam() {
			this.$refs.addForm.$el.showModal();
		},
		updateTeam(id, name, winningYears) {
			this.$refs.updateForm.$el.showModal();
			this.updateDoc = {
				id: id,
				name: name,
				winningYears: winningYears,
			};
		},
		closeAddFrom() {
			this.$refs.addForm.$el.close();
			snackbar.show("The team has been added successfully!");
		},
		closeAddModal() {
			this.$refs.addForm.$el.close();
		},
		closeUpdateForm() {
			this.$refs.updateForm.$el.close();
			snackbar.show("The team has been updated successfully!");
		},
		closeUpdateModal() {
			this.$refs.updateForm.$el.close();
		},
		askConfirm(id) {
			this.$refs.deleteForm.$el.showModal();
			this.deleteDoc = id;
		},
		closeConfirmBox() {
			this.$refs.deleteForm.$el.close();
		},
		showTeams() {
			this.loaded = true;
		},
	},
	computed: {
		filteredTeam() {
			return this.allTeams.filter((team) =>
				team.name.toLowerCase().includes(this.teamName.trim().toLowerCase())
			);
		},
	},
};
</script>

<style scoped>
h1 {
	text-align: center;
	margin-bottom: 50px;
	text-transform: uppercase;
}
.container {
	max-width: 1000px;
	margin: 100px auto;
	padding: 20px;
}
.app-functions {
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-top: 80px;
}
.all-teams {
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	margin-top: 70px;
	column-gap: 30px;
	row-gap: 50px;
}
@media screen and (min-width: 601px) {
	.app-functions {
		flex-direction: row;
	}
	.all-teams {
		grid-template-columns: repeat(2, 1fr);
	}
}
@media screen and (min-width: 801px) {
	.all-teams {
		grid-template-columns: repeat(4, 1fr);
	}
}
</style>
