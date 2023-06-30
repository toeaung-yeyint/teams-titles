<template>
	<div class="app-result">
		<div class="icons">
			<i class="fa-regular fa-pen-to-square" @click="handleUpdate"></i>
			<i class="fa-solid fa-xmark" @click="handleDelete"></i>
		</div>
		<img :src="src" alt="" @load="handleImageLoad" ref="image" />
		<h2>{{ name }}</h2>
		<div>Winning Years:</div>
		<div class="year" v-for="(year, index) in sortedYears" :key="index">
			{{ year }}
		</div>
	</div>
</template>

<script>
export default {
	props: ["id", "src", "name", "winningYears"],
	emits: ["update", "delete", "loaded"],
	computed: {
		sortedYears() {
			return this.winningYears.sort((a, b) => {
				return Number.parseInt(b) - Number.parseInt(a);
			});
		},
	},
	methods: {
		handleUpdate() {
			this.$emit("update", this.id, this.name, this.winningYears);
		},
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
	padding: 10px 20px;
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
	margin: 20px 0;
}
.app-result h2 {
	font-size: 1.3rem;
	margin: 0;
	text-align: center;
	margin-bottom: 25px;
}
.icons {
	display: flex;
	justify-content: flex-end;
}
i {
	background: #d4d4d4;
	padding: 5px;
	font-size: 0.8rem;
	cursor: pointer;
	color: white;
}
i {
	padding: 5px;
	font-size: 0.8rem;
	cursor: pointer;
	color: white;
}
.fa-pen-to-square {
	margin-right: 10px;
}
.fa-pen-to-square:hover {
	background: #0ea5e9;
}
.fa-xmark {
	background: #d4d4d4;
}
.fa-xmark:hover {
	background: #ef4444;
}
</style>
