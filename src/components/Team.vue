<template>
	<div class="app-result">
		<img :src="src" alt="" @load="handleImageLoad" ref="image" />
		<h2>{{ name }}</h2>
		<div>Winning Years:</div>
		<div class="year" v-for="(year, index) in sortedYears" :key="index">
			{{ year }}
		</div>
		<i class="fa-solid fa-trash" @click="handleDelete"></i>
	</div>
</template>

<script>
export default {
	props: ["id", "src", "name", "winningYears"],
	emits: ["delete", "loaded"],
	computed: {
		sortedYears() {
			return this.winningYears.sort((a, b) => {
				return Number.parseInt(b) - Number.parseInt(a);
			});
		},
	},
	methods: {
		handleDelete() {
			this.$emit("delete", this.id);
		},
		handleImageLoad() {
			this.$emit("loaded");
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
	position: relative;
}
.app-result .year {
	display: inline-block;
	margin: 10px 10px 0 0;
}
.app-result img {
	width: 100%;
	height: 160px;
	object-fit: contain;
	margin-bottom: 20px;
}
.app-result h2 {
	font-size: 1.3rem;
	margin: 0;
	text-align: center;
	margin-bottom: 25px;
}
i {
	background: #52525b;
	padding: 7px;
	position: absolute;
	top: 0px;
	right: 0px;
	font-size: 0.8rem;
	cursor: pointer;
	color: white;
}
</style>
