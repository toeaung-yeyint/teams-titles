import snackbar from "snackbar";

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
			document
				.querySelector("#search-team div")
				.append(document.querySelector(".snackbar"));
			snackbar.show("No data for the team you are searching for.");
		});
});

// this handles search rest button
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
				document
					.querySelector("#add-team div")
					.append(document.querySelector(".snackbar"));
				snackbar.show("The team already exists in the database.");
			} else {
				fetch("https://64434a3e466f7c2b4b51171b.mockapi.io/teams", {
					method: "post",
					headers: { "content-type": "application/json" },
					body: JSON.stringify({
						name: teamName.value,
						titles: titles,
					}),
				})
					.then((res) => res.json())
					.then(() => {
						teamName.value = "";
						document.querySelector("#add-titles").value = "";
						document
							.querySelector("#add-team div")
							.append(document.querySelector(".snackbar"));
						snackbar.show("You have added the team successfully.");
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
					document
						.querySelector("#delete-team div")
						.append(document.querySelector(".snackbar"));
					snackbar.show("You have deleted the team successfully.");
					teamName.value = "";
				});
		})
		.catch(() => {
			teamName.value = "";
			document
				.querySelector("#delete-team div")
				.append(document.querySelector(".snackbar"));
			snackbar.show(
				"The team you want to delete doesn't exist in the database."
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
					document
						.querySelector("#update-team div")
						.append(document.querySelector(".snackbar"));
					snackbar.show(
						"You have updated the winning history of the team successfully."
					);
				});
		})
		.catch(() => {
			teamName.value = "";
			document
				.querySelector("#update-team div")
				.append(document.querySelector(".snackbar"));
			snackbar.show("You can't update the team that doesn't exist.");
		});
});

// this handles the menu buttons including menu reset button
const features = Array.from(document.querySelectorAll(".feature"));
const restTeamButton = document.querySelector("#rest-team-button");
const featureButtons = Array.from(
	document.querySelectorAll(".feature-enabler")
);
featureButtons.forEach((featureButton) => {
	featureButton.addEventListener("click", () => {
		featureButtons.forEach((feature) => {
			feature.classList.remove("active");
		});
		features.forEach((feature) => {
			feature.classList.remove("show");
		});
		result.textContent = "";
		featureButton.classList.add("active");
		if (featureButton.id === "search-team-button") {
			document.querySelector("#search-team").classList.add("show");
		} else if (featureButton.id === "add-team-button") {
			document.querySelector("#add-team").classList.add("show");
		} else if (featureButton.id === "delete-team-button") {
			document.querySelector("#delete-team").classList.add("show");
		} else if (featureButton.id === "update-team-button") {
			document.querySelector("#update-team").classList.add("show");
		}
	});
});
restTeamButton.addEventListener("click", () => {
	featureButtons.forEach((feature) => {
		feature.classList.remove("active");
	});
	features.forEach((feature) => {
		feature.classList.remove("show");
	});
});
