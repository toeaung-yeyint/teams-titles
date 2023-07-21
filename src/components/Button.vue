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
        primary: "bg-gray-600 hover:bg-gray-800 text-white",
        secondary: "bg-neutral-200 hover:bg-neutral-300 text-black",
        update: "bg-sky-500 hover:bg-sky-600  text-white",
        delete: "bg-red-500 hover:bg-red-600 text-white",
      };
      return classMap[this.type] || "";
    },
  },
};
</script>