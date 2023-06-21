<template>
  <button :class="buttonClasses">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: ["label", "type"],
  computed: {
    buttonClasses() {
      return {
        reset: this.type === "reset",
        cancel: this.type === "cancel",
      };
    },
  },
};
</script>

<style scroped>
button {
  background: #52525b;
  outline: 0;
  border: 0;
  color: white;
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
}
button:hover {
  background: black;
}
.reset {
  background: #ef4444;
}
.reset:hover {
  background: red;
}
.cancel {
  border: 1px solid black;
  color: #404040;
  background: white;
}
.cancel:hover {
  background: #f5f5f5;
}
</style>
