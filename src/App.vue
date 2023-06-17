<template>
	<div class="container">
		<h1>teams-titles</h1>
		<p><strong>Built using:</strong> Vue 3, HTML5, CSS,MockAPI, Vite</p>
		<p>
			This app allows users to view the winning history of top European football
			teams in the UEFA Champions League. Users can access the Champions League
			winning history of teams such as Real Madrid, Barcelona, Manchester
			United, Chelsea, Liverpool, Bayern Munich, AC Milan, Inter Milan,
			Juventus, and Ajax. Additionally, the system provides functionality for
			users to add new teams, remove existing teams, and update the winning
			history of teams.
		</p>
		<div class="app-functions">
			<SearchBar @showResult="filter" />
			<AppButton label="add a new team" />
			<AppButton label="rest" type="reset" @click="reset" />
		</div>
		<div v-if="showAll">
			<div v-for="(team, index) in allTeams" :key="index">
				<Teams :src="team.logo" :name="team.name" :titles="team.titles" />
			</div>
		</div>
		<h3 v-if="errorMessage" class="error-message">
			The team you are looking for doesn't exist in the database yet.
		</h3>
		<div v-if="showOnlyFiltered">
			<div v-for="(team, index) in filteredTeam" :key="index">
				<Teams :src="team.logo" :name="team.name" :titles="team.titles" />
			</div>
		</div>
	</div>
</template>

<script>
import AppButton from "./components/AppButton.vue";
import Teams from "./components/Teams.vue";
import SearchBar from "./components/SearchBar.vue";
export default {
	components: { AppButton, Teams, SearchBar },
	data() {
		return {
			allTeams: [],
			showAll: true,
			src: null,
			name: null,
			titles: null,
			result: false,
			filteredTeam: [],
			showOnlyFiltered: false,
			errorMessage: false,
		};
	},
	created() {
		fetch(`https://64434a3e466f7c2b4b51171b.mockapi.io/teams`)
			.then((res) => res.json())
			.then((data) => {
				this.allTeams = data;
			});
	},
	methods: {
		filter(data) {
			this.showAll = false;
			this.errorMessage = false;
			this.filteredTeam = this.allTeams.filter(
				(team) => team.name.toLowerCase() === data.trim().toLowerCase()
			);
			console.log(this.filteredTeam.length);
			if (this.filteredTeam.length > 0) {
				this.showOnlyFiltered = true;
			} else {
				this.errorMessage = true;
			}
		},
		reset() {
			this.showOnlyFiltered = false;
			this.filteredTeam = [];
			this.errorMessage = false;
			this.showAll = true;
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
@media screen and (min-width: 801px) {
	.app-functions {
		flex-direction: row;
	}
}
.error-message {
	margin-top: 50px;
}
</style>
