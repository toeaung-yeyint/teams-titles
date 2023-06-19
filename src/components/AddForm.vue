<template>
  <h2>Add a new team</h2>
  <form @submit.prevent>
    <div>
      <input id="name" type="text" required placeholder=" " /><label for="name"
        >Team name:</label
      >
    </div>
    <div>
      <input type="text" id="logo" required placeholder=" " />
      <label for="logo">Team logo url:</label>
    </div>
    <div>
      <input
        id="years"
        type="text"
        pattern="\d{4}(,\s\d{4})*"
        title="e.g. 2022, 2023"
        required
        placeholder=" "
      />
      <label for="years">Winning years:</label>
    </div>
    <Button label="add" />
  </form>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
};
</script>

<style scoped>
h2 {
  color: black;
  text-align: center;
  text-transform: uppercase;
  margin: 0 0 30px 0;
}
div {
  position: relative;
  margin-bottom: 30px;
}
label {
  position: absolute;
  top: 10px;
  left: 0px;
  transition: all 0.5s ease-in-out;
  padding: 0 5px;
  pointer-events: none;
  color: #505050;
}
input {
  color: #505050;
  box-sizing: border-box;
  padding: 10px;
  outline: 0;
  width: 100%;
  border: 0;
  background: transparent;
  border-bottom: 1px solid #505050;
}
input:focus {
  border-bottom: 2px solid black;
}
input:focus + label,
input:not(:placeholder-shown) + label {
  top: -12px;
}
button {
  width: 100%;
}
</style>