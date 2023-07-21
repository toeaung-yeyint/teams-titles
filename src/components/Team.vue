<template>
	<div class="w-full h-full py-4 px-3 border-2 dark:border-gray-700">
		<div class="flex justify-end gap-x-2 text-white">
			<i
				class="fa-regular fa-pen-to-square bg-gray-300 p-2 hover:bg-sky-500 dark:bg-gray-800 dark:hover:bg-sky-500 cursor-pointer"
				@click="handleUpdate"
			></i>
			<i
				class="fa-solid fa-xmark bg-gray-300 p-2 hover:bg-red-500 dark:bg-gray-800 dark:hover:bg-red-500 cursor-pointer"
				@click="handleDelete"
			></i>
		</div>
		<img
			:src="src"
			alt=""
			@load="handleImageLoad"
			ref="image"
			class="w-full object-contain h-36 my-8"
		/>
		<h2 class="font-bold text-center text-xl mb-4">{{ name }}</h2>
		<div>Winning Years:</div>
		<div
			class="inline-block mt-2 mr-3"
			v-for="(year, index) in sortedYears"
			:key="index"
		>
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
