<template>
  <h2>Please confirm to delete the team.</h2>
  <div class="buttons">
    <Button label="Confirm" />
    <Button label="Cancel" @click="handleCancel" />
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
  methods: {
    handleCancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>