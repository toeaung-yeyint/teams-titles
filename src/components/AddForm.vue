<template>
  <form @submit.prevent="addTeam" ref="addForm" class="text-sm">
    <i
      class="fa-solid fa-xmark text-red-600 text-right text-2xl block mb-2 cursor-pointer"
      @click="handleClose"
    ></i>
    <h2 class="text-2xl font-bold uppercase mb-6 text-center">
      Add a new team
    </h2>
    <div class="mb-8">
      <label for="name">Name:</label>
      <input
        v-model="name"
        id="name"
        type="text"
        required
        placeholder="e.g. Real Madrid"
      />
    </div>
    <div class="mb-8">
      <label for="winningYears">Winning Years:</label>
      <input
        v-model="winningYears"
        id="winningYears"
        type="text"
        pattern="\d{4}(,\d{4})*"
        title="e.g. 2022,2023"
        required
        placeholder="e.g. 2022,2023"
      />
    </div>
    <div class="flex flex-col my-8">
      <div>
        <label for="logo">Logo:</label>
        <input ref="inputFile" type="file" accept=".webp" id="logo" required />
      </div>
      <p class="warning-text" v-if="showFileSizeWarning">
        Please select an image file smaller than 50KB.
      </p>
    </div>
    <Button type="primary" label="add" />
  </form>
</template>

<script>
import Button from "./Button.vue";
import { db, storage } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

export default {
  components: { Button },
  emits: ["add", "close"],
  data() {
    return {
      id: null,
      name: null,
      winningYears: null,
      showFileSizeWarning: false,
    };
  },
  methods: {
    async addTeam() {
      const file = this.$refs.inputFile.files[0];
      if (file.size > 50000) {
        this.showFileSizeWarning = true;
        return;
      } else {
        this.showFileSizeWarning = false;
        this.id = uuidv4();
        this.name = this.name.trim();
        this.winningYears = this.winningYears.split(",");
        this.winningYears = this.winningYears.map((year) =>
          Number.parseInt(year)
        );

        // Create a storage reference with a unique filename
        const storageRef = ref(storage, this.id);
        // Upload the file to Firebase Storage
        await uploadBytes(storageRef, file);
        // Get the public download URL of the uploaded file
        const url = await getDownloadURL(storageRef);

        const docRef = doc(db, "teams", this.id);
        await setDoc(docRef, {
          logo: url,
          name: this.name,
          winningYears: this.winningYears,
        });
        this.name = "";
        this.winningYears = "";
        this.$refs.addForm.reset();
        this.$emit("add");
      }
    },
    handleClose() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
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
.warning-text {
  font-size: 0.8rem;
  color: red;
  margin: 15px 0 0 0;
  padding-left: 5px;
}
</style>
