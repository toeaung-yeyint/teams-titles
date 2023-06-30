<template>
  <h2>Update the team details</h2>
  <form @submit.prevent="updateTeam" ref="updateForm">
    <div class="input-field">
      <label for="name">Name:</label>
      <input
        v-model="name"
        id="name"
        type="text"
        required
        placeholder="e.g. Real Madrid"
      />
    </div>
    <div class="input-field">
      <label for="winningYears">Winning Years:</label>
      <input
        v-model="winningYears"
        id="winningYears"
        type="text"
        pattern="\d{4}(,\s\d{4})*"
        title="e.g. 2022, 2023"
        required
        placeholder="e.g. 2022, 2023"
      />
    </div>
    <div class="input-field-logo">
      <div>
        <label for="logo">Logo:</label>
        <input ref="inputFile" type="file" accept=".webp" id="logo" required />
      </div>
      <p class="warning-text" v-if="showFileSizeWarning">
        Please select an image file smaller than 50KB.
      </p>
    </div>
    <Button label="update" type="update" />
    <i class="fa-solid fa-xmark" @click="handleClose"></i>
  </form>
</template>
  
  <script>
import Button from "./Button.vue";
import { db, storage } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
  components: { Button },
  props: ["updateDoc"],
  emits: ["update", "close"],
  data() {
    return {
      id: null,
      name: null,
      winningYears: null,
      showFileSizeWarning: false,
    };
  },
  methods: {
    async updateTeam() {
      const file = this.$refs.inputFile.files[0];
      if (file.size > 50000) {
        this.showFileSizeWarning = true;
        return;
      } else {
        this.showFileSizeWarning = false;
        this.id = this.updateDoc;
        this.name = this.name.trim();
        this.winningYears = this.winningYears.split(", ");
        this.winningYears = this.winningYears.map((year) =>
          Number.parseInt(year)
        );

        // Create a storage reference with a unique filename
        const storageRef = ref(storage, this.id);
        // Upload the file to Firebase Storage
        await uploadBytes(storageRef, file);
        // Get the public download URL of the uploaded file
        const url = await getDownloadURL(storageRef);

        const docRef = doc(db, "teams", this.updateDoc);
        await updateDoc(docRef, {
          logo: url,
          name: this.name,
          winningYears: this.winningYears,
        });
        this.name = "";
        this.winningYears = "";
        this.$refs.updateForm.reset();
        this.$emit("update");
      }
    },
    handleClose() {
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
  margin-bottom: 30px;
}
.input-field-logo {
  display: flex;
  flex-direction: column;
  margin: 40px 0;
}
label {
  padding: 0 5px;
  color: #505050;
  display: inline;
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
Button {
  width: 100%;
}
i {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 1.5rem;
  cursor: pointer;
  color: red;
}
.warning-text {
  font-size: 0.8rem;
  color: red;
  margin: 15px 0 0 0;
  padding-left: 5px;
}
</style>
  