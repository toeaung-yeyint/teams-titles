<template>
	<div class="app-result">
		<img :src="src" alt="" />
		<h2>{{ name }}</h2>
		<div>Winning Years:</div>
		<div class="year" v-for="(year, index) in sortedYears" :key="index">
			{{ year }}
		</div>
	</div>
</template>

<script>
export default {
	props: ["src", "name", "winningYears"],
	computed: {
		sortedYears() {
			return this.winningYears.sort((a, b) => {
				return Number.parseInt(a) - Number.parseInt(b);
			});
		},
	},
};
</script>

<style scoped>
.app-result {
	width: 100%;
	height: auto;
	box-sizing: border-box;
	padding: 20px;
	box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0, 0, 0, 0.24);
}
.app-result .year {
	display: inline-block;
	margin: 10px 10px 0 0;
}
.app-result img {
	background-color: white;
	width: 100%;
	max-height: 160px;
	object-fit: contain;
	margin-bottom: 20px;
}
.app-result h2 {
	font-size: 1.3rem;
	margin: 0;
	text-align: center;
	margin-bottom: 25px;
}
</style>
