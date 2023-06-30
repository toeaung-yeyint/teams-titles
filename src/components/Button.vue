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
        update: this.type === "update",
        delete: this.type === "delete",
        secondary: this.type === "secondary",
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
.update {
  background: #0ea5e9;
}
.update:hover {
  background: #0284c7;
}
.delete {
  background: #ef4444;
}
.delete:hover {
  background: #dc2626;
}
.secondary {
  background: white;
  color: #404040;
  border: 1px solid black;
}
.secondary:hover {
  background: #f5f5f5;
}
</style>
