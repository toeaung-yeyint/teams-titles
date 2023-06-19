<template>
  <dialog class="modal"><slot></slot></dialog>
</template>

<script>
export default {};
</script>

<style scoped>
dialog::backdrop {
  background: rgba(0, 0, 0, 0.7);
}
.modal {
  padding: 30px;
  width: 300px;
}
</style>