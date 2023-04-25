import snackbar from "snackbar";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
snackbar.duration = 3000;
const result = document.querySelector(".result");

// this handles searching for a team from api
const searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	result.textContent = "";
	let teamName = document.querySelector("#search-team-name");
	let teamId;
	fetch("https://64434a3e466f7c2b4b51171b.mockapi.io/teams")
		.then((res) => res.json())
		.then((data) => {
			teamId = Number.parseInt(
				data.find(
					(team) =>
						team.name.toLowerCase() === teamName.value.toLowerCase().trim()
				).id
			);
			fetch(`https://64434a3e466f7c2b4b51171b.mockapi.io/teams/${teamId}`)
				.then((res) => res.json())
				.then((data) => {
					result.insertAdjacentHTML("beforeend", `<h3>${data.name}</h3>`);
					data.titles.forEach((title) => {
						result.insertAdjacentHTML("beforeend", `<li>${title}</li>`);
					});
					teamName.value = "";
				});
		})
		.catch(() => {
			teamName.value = "";
			snackbar.show("No data for the team you are searching for!!!");
		});
});

// this handles the rest button
const restButton = document.querySelector(".rest-btn");
restButton.addEventListener("click", () => {
	result.textContent = "";
});

// this handles adding a team to api
const addForm = document.querySelector(".add-form");
addForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const teamName = document.querySelector("#add-team-name");
	let titles = document.querySelector("#add-titles").value.split(",");
	titles = titles.map((title) => title.trim());
	fetch("https://64434a3e466f7c2b4b51171b.mockapi.io/teams")
		.then((res) => res.json())
		.then((data) => {
			if (
				data.find(
					(team) =>
						team.name.toLowerCase() === teamName.value.toLowerCase().trim()
				)
			) {
				teamName.value = "";
				document.querySelector("#add-titles").value = "";
				snackbar.show("The team already exists in the database!!!");
			} else {
				fetch("https://64434a3e466f7c2b4b51171b.mockapi.io/teams", {
					method: "post",
					headers: { "content-type": "application/json" },
					body: JSON.stringify({
						name:
							teamName.value.substring(0, 1).toUpperCase() +
							teamName.value.substring(1).toLowerCase(),
						titles: titles,
					}),
				})
					.then((res) => res.json())
					.then(() => {
						teamName.value = "";
						document.querySelector("#add-titles").value = "";
						snackbar.show("You have added the team successfully!!!");
					});
			}
		});
});

// this handles deleting a team from api
const deleteForm = document.querySelector(".delete-form");
deleteForm.addEventListener("submit", (e) => {
	e.preventDefault();
	let teamName = document.querySelector("#delete-team-name");
	let teamId;
	fetch("https://64434a3e466f7c2b4b51171b.mockapi.io/teams")
		.then((res) => res.json())
		.then((data) => {
			teamId = Number.parseInt(
				data.find(
					(team) =>
						team.name.toLowerCase() === teamName.value.toLowerCase().trim()
				).id
			);
			fetch(`https://64434a3e466f7c2b4b51171b.mockapi.io/teams/${teamId}`, {
				method: "delete",
			})
				.then((res) => res.json())
				.then(() => {
					snackbar.show("You have deleted the team successfully!!!");
					teamName.value = "";
				});
		})
		.catch(() => {
			teamName.value = "";
			snackbar.show(
				"The team you want to delete doesn't exist in the database!!!"
			);
		});
});

// this handles update a team's information from api
const updateForm = document.querySelector(".update-form");
updateForm.addEventListener("submit", (e) => {
	e.preventDefault();
	let teamName = document.querySelector("#update-team-name");
	let teamId;
	let titles = document.querySelector("#update-titles").value.split(",");
	titles = titles.map((title) => title.trim());
	fetch("https://64434a3e466f7c2b4b51171b.mockapi.io/teams")
		.then((res) => res.json())
		.then((data) => {
			teamId = Number.parseInt(
				data.find(
					(team) =>
						team.name.toLowerCase() === teamName.value.toLowerCase().trim()
				).id
			);
			console.log(teamId);
			fetch(`https://64434a3e466f7c2b4b51171b.mockapi.io/teams/${teamId}`, {
				method: "put",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ titles: titles }),
			})
				.then((res) => res.json())
				.then(() => {
					teamName.value = "";
					document.querySelector("#update-titles").value = "";
					snackbar.show("You have updated the team information succesfully!!!");
				});
		})
		.catch(() => {
			teamName.value = "";
			snackbar.show("You can't update the team that doesn't exist!!!");
		});
});

// this handles the menu buttons
const featuresEnablers = Array.from(
	document.querySelectorAll(".feature-enabler")
);
const features = Array.from(document.querySelectorAll(".feature"));
const searchTeamButton = document.querySelector("#search-team-button");
const addTeamButton = document.querySelector("#add-team-button");
const deleteTeamButton = document.querySelector("#delete-team-button");
const updateTeamButton = document.querySelector("#update-team-button");
const restTeamButton = document.querySelector("#rest-team-button");
searchTeamButton.addEventListener("click", () => {
	featuresEnablers.forEach((feature) => {
		feature.classList.remove("active");
	});
	features.forEach((feature) => {
		feature.classList.remove("show");
	});
	searchTeamButton.classList.add("active");
	document.querySelector("#search-team").classList.add("show");
});
addTeamButton.addEventListener("click", () => {
	featuresEnablers.forEach((feature) => {
		feature.classList.remove("active");
	});
	features.forEach((feature) => {
		feature.classList.remove("show");
	});
	addTeamButton.classList.add("active");
	document.querySelector("#add-team").classList.add("show");
});
deleteTeamButton.addEventListener("click", () => {
	featuresEnablers.forEach((feature) => {
		feature.classList.remove("active");
	});
	features.forEach((feature) => {
		feature.classList.remove("show");
	});
	deleteTeamButton.classList.add("active");
	document.querySelector("#delete-team").classList.add("show");
});
updateTeamButton.addEventListener("click", () => {
	featuresEnablers.forEach((feature) => {
		feature.classList.remove("active");
	});
	features.forEach((feature) => {
		feature.classList.remove("show");
	});
	updateTeamButton.classList.add("active");
	document.querySelector("#update-team").classList.add("show");
});
restTeamButton.addEventListener("click", () => {
	featuresEnablers.forEach((feature) => {
		feature.classList.remove("active");
	});
	features.forEach((feature) => {
		feature.classList.remove("show");
	});
});
