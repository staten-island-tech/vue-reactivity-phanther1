import { reactive } from 'vue'

export const add = reactive({
  count: 0,
  increment() {
    this.count++
  }
})

export const subtract = reactive({
    count: 0,
    decrement() {
      this.count--
    }
  })        