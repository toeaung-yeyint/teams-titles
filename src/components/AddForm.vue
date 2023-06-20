<template>
  <h2>Add a new team</h2>
  <form @submit.prevent="addTeam" ref="addFrom">
    <div class="input-field">
      <input
        v-model="name"
        id="name"
        type="text"
        required
        placeholder=" "
      /><label for="name">Name:</label>
    </div>
    <div class="input-field">
      <input
        v-model="winningYears"
        id="winningYears"
        type="text"
        pattern="\d{4}(,\s\d{4})*"
        title="e.g. 2022, 2023"
        required
        placeholder=" "
      />
      <label for="winningYears">Winning Years:</label>
    </div>
    <div class="input-field-logo">
      <label for="logo">Logo:</label>
      <input type="file" accept=".webp" id="logo" required />
    </div>
    <Button label="add" />
  </form>
</template>

<script>
import Button from "./Button.vue";
import db from "../firebase";
import { addDoc, collection } from "firebase/firestore";
export default {
  components: { Button },
  emits: ["close"],
  data() {
    return {
      name: null,
      logo: null,
      winningYears: null,
    };
  },
  methods: {
    addTeam() {
      // const colRef = collection(db, "teams");
      // this.winningYears = this.winningYears.split(", ");
      // this.winningYears = this.winningYears.map((year) =>
      //   Number.parseInt(year)
      // );
      // addDoc(colRef, {
      //   logo: this.url,
      //   name: this.name,
      //   winningYears: this.winningYears,
      // });
      this.$refs.addFrom.reset();
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
h2 {
  color: black;
  text-align: center;
  text-transform: uppercase;
  margin: 0 0 30px 0;
}
.input-field {
  position: relative;
  margin-bottom: 30px;
}
.input-field-logo {
  display: flex;
  align-items: center;
  margin: 40px 0;
}
label[for="name"],
label[for="winningYears"] {
  position: absolute;
  top: 10px;
  left: 0px;
  transition: all 0.5s ease-in-out;
  padding: 0 5px;
  pointer-events: none;
  color: #505050;
}
input#name,
input#winningYears {
  color: #505050;
  box-sizing: border-box;
  padding: 10px;
  outline: 0;
  width: 100%;
  border: 0;
  background: transparent;
  border-bottom: 1px solid #505050;
}
input#name:focus,
input#winningYears:focus {
  border-bottom: 2px solid black;
}
input:focus + label[for="name"],
input:not(:placeholder-shown) + label[for="name"],
input:focus + label[for="winningYears"],
input:not(:placeholder-shown) + label[for="winningYears"] {
  top: -12px;
}
Button {
  width: 100%;
}
label[for="logo"] {
  margin: 0 10px;
}
</style>
