<template>
  <form
    @submit.prevent
    class="flex border-2 flex-grow items-center focus-within:border-black dark:focus-within:border-white"
  >
    <input
      type="text"
      placeholder="Search..."
      required
      v-model="teamName"
      @input="updateTeamName"
      class="dark:bg-gray-900 flex-grow outline-none border-none pl-5"
    />
    <i class="fa-solid fa-magnifying-glass py-3 px-3"></i>
  </form>
</template>

<script>
export default {
  emits: ["update"],
  data() {
    return {
      teamName: "",
    };
  },
  methods: {
    updateTeamName() {
      this.$emit("update", this.teamName);
    },
  },
};
</script>