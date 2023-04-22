import snackbar from "snackbar";
snackbar.duration = 3000;

// this handles searching for a team
const searchForm = document.querySelector(".search-form");
const result = document.querySelector(".result");
searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	result.textContent = "";
	let teamName = document.querySelector("#team-name");
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
			snackbar.show("No data for the team you are searching for!!!");
			teamName.value = "";
		});
});

// fetch("https://64434a3e466f7c2b4b51171b.mockapi.io/teams", {
// 	method: "post",
// 	headers: { "content-type": "application/json" },
// 	body: JSON.stringify({ name: "PSG", title: ["title1", "title2"] }),
// })
// 	.then((res) => res.json())
// 	.then((data) => console.log(data));

// fetch('https://64434a3e466f7c2b4b51171b.mockapi.io/teams').then(res => res.json()).then(data => {
// 	teamName = data.find(team => {return team.name === 'Arsenal'}).name
// 	teamTitles = data.find(team => {return team.name === 'Arsenal'}).titles
// })

// fetch("https://64434a3e466f7c2b4b51171b.mockapi.io/teams/4", {
// 	method: "delete",
// })
// 	.then((res) => res.json())
// 	.then((data) => console.log(data));

// fetch("https://64434a3e466f7c2b4b51171b.mockapi.io/teams/1", {
// 	method: "put",
// 	headers: { "content-type": "application/json" },
// 	body: JSON.stringify({ name: "Liverpool" }),
// })
// 	.then((res) => res.json())
// 	.then((data) => console.log(data));

// snackbar.show("No data for the team you are searching for!!!");
