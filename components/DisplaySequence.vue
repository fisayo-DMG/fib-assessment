<template>
  <div class='fib' v-if="sequence.length">
    SEQUENCE:
    <h6 v-bind:key="numbers * generateRandomID()" v-for="numbers in sequence">
      {{numbers}}
    </h6>
  </div>
</template>

<script>
export default {
  computed: {
    sequence() {
      return this.$store.state.sequence
    }
  },
  methods: {
    generateRandomID() {
      return Math.random() * 100
    }
  }
}
</script>

<style scoped>
  h6 {
    display: inline;
  }
</style>