<template>
	<div class="app-result">
		<img :src="src" alt="" />
		<div class="titles">
			<h4>{{ name }}</h4>
			<ul>
				<li v-for="(title, index) in titles" :key="index">{{ title }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: ["src", "name", "titles"],
};
</script>

<style scoped>
.app-result {
	margin-top: 70px;
	display: flex;
	gap: 50px;
	box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0, 0, 0, 0.24);
	padding: 30px 0;
}
.app-result img {
	width: 50%;
	height: 180px;
	object-fit: contain;
	align-self: center;
}
.app-result .titles {
	width: 50%;
	align-self: center;
}
</style>
