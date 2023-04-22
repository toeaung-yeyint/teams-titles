import snackbar from "snackbar";
snackbar.duration = 3000;

// this handles searching a team
const form = document.querySelector(".form");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset-btn");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const teamName = document.querySelector("#team-name");
	switch (teamName.value.toLowerCase()) {
		case "arsenal":
			result.insertAdjacentHTML(
				"beforeend",
				"<div><h3>Arsenal</h3><li>2023 Premier league</li><li>2024 FA cup</li></div>"
			);
			break;
		case "liverpool":
			result.insertAdjacentHTML(
				"beforeend",
				"<div><h3>Liverpool</h3><li>2020 Champion league</li><li>2021 Premier league</li></div>"
			);
			break;
		case "chelsea":
			result.insertAdjacentHTML(
				"beforeend",
				"<div><h3>Chelsea</h3><li>2018 Premier league</li><li>2016 Premier league</li></div>"
			);
			break;
		case "manchester united":
			result.insertAdjacentHTML(
				"beforeend",
				"<div><h3>Manchester United</h3><li>2016 Europa league</li><li>2016 English cup</li></div>"
			);
			break;
		default:
			snackbar.show("No data for the team you are searching for!!!");
	}
	if (result.childNodes.length > 3) {
		result.firstChild.remove();
	}
	teamName.value = "";
});
reset.addEventListener("click", () => {
	result.innerHTML = "";
});

// this handles adding a team
const teams = [];
const addForm = document.querySelector(".add-form");
addForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const addTeamName = document.querySelector("#add-team-name");
	const addTitles = document.querySelector("#add-titles");
	let teamName = addTeamName.value.trim().toLowerCase();
	let teamTitles = addTitles.value.split(",");
	teamTitles = teamTitles.map((title) => {
		return title.toLowerCase().trim();
	});
	const team = {
		name: teamName,
		titles: teamTitles,
	};
	teams.push(team);
	addTeamName.value = "";
	addTitles.value = "";
	console.log(team);
	console.log(teams);
});

// this handles deleting a team
