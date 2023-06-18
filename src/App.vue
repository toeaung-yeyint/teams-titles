<template>
	<div class="container">
		<h1>teams-titles</h1>
		<p>
			<strong>Built using:</strong> Vue, HTML, CSS, Snackbar.js, MockAPI, Vite
		</p>
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
			<SearchBar ref="searchBar" @update="handleTeamName" />
			<AppButton label="add a new team" />
			<AppButton label="reset" type="reset" @click="reset" />
		</div>
		<div class="all-teams">
			<Team
				v-for="(team, index) in filteredTeam"
				:key="index"
				:src="team.logo"
				:name="team.name"
				:years="team.years"
			/>
		</div>
	</div>
</template>

<script>
import AppButton from "./components/AppButton.vue";
import Team from "./components/Team.vue";
import SearchBar from "./components/SearchBar.vue";
export default {
	components: { AppButton, Team, SearchBar },
	data() {
		return {
			allTeams: [],
			src: null,
			name: null,
			years: null,
			result: false,
			teamName: "",
		};
	},
	beforeMount() {
		fetch(`https://64434a3e466f7c2b4b51171b.mockapi.io/teams`)
			.then((res) => res.json())
			.then((data) => {
				this.allTeams = data;
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
