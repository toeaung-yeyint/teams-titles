<template>
	<button class="uppercase px-4 py-2 text-sm" :class="buttonClasses">
		{{ label }}
	</button>
</template>

<script>
export default {
	props: ["label", "type"],
	computed: {
		buttonClasses() {
			const classMap = {
				primary: "bg-sky-500 hover:bg-sky-600 text-white",
				secondary:
					"border bg-neutral-50 hover:bg-neutral-100 text-black dark:border-gray-800 dark:hover:bg-gray-700 dark:bg-gray-800 dark:text-white",
				delete: "bg-red-500 hover:bg-red-600 text-white",
			};
			return classMap[this.type] || "";
		},
	},
};
</script>
