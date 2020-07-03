
const fib = (n) => {
  let arr = [0, 1]
  let i = 2
  let next;
  while (true) {
    next = arr[i - 1] + arr[i - 2]
    if (next > n) {
      return {arr, next};
    }
    arr[i] = next;
    i += 1
  }
}

export const state = () => ({
  sequence: [],
  next: null,
})

export const mutations = {
  getSequence (state, max) {
    if (!max) return
    const {arr, next} = fib(max)
    state.sequence = arr;
    state.next = next;
  },

  setSequence (state) {
    state.sequence = [...state.sequence, state.next]
    state.next = null;
  },
}

