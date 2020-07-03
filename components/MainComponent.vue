<template>
  <div>
    <br />
    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="checkSuccess"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      <p>{{ status }} Number</p>
      <b-progress
        :variant="checkSuccess"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
        width="50%"
      ></b-progress>
    </b-alert>
    <label
      >Enter max number <input v-model="max" class="max" type="number"/></label
    ><br />
    <label
      >Enter next number
      <input v-model="next" class="next" type="number"/></label
    ><br />

    <b-button @click="add" variant="info" class="m-1">
      Add Number
    </b-button>
    <b-button @click="submit" variant="info" class="m-1">
      Submit
    </b-button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
s
export default {
  data() {
    return {
      max: "",
      next: "",
      dismissSecs: 1.5,
      dismissCountDown: 0,
      status: "Wrong"
    };
  },
  computed: {
    checkSuccess() {
      return this.status === "Correct" ? "success" : "warning";
    }
  },

  methods: {
    ...mapMutations({
      getSequence: "getSequence",
      setSequence: "setSequence",
    }),
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    submit() {
      this.getSequence(this.max);
      if (!this.$store.state.next) {
        this.max = "";
      }
      if (this.status === "Correct") {
        this.setSequence();
        this.max = "";
        this.status = "Wrong";
      }
    },

    add() {
      if (!this.next) return;
      this.getSequence(this.max)
      if (this.next == this.$store.state.next) {
        this.status = "Correct";
        this.dismissCountDown = this.dismissSecs;
      } else {
        this.status = "Wrong";
        this.dismissCountDown = this.dismissSecs;
      }
      this.next = "";
    }
  }
};
</script>

<style></style>
