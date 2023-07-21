<template>
	<dialog class="modal w-[450px] p-6 dark:bg-gray-900">
		<slot></slot>
	</dialog>
</template>

<script>
export default {};
</script>

<style scoped>
dialog::backdrop {
	background: rgba(0, 0, 0, 0.7);
}
</style>
