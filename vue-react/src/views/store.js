import { reactive } from 'vue'
import { ref } from "vue";
let clicked = ref(0);

export const store = reactive({
  count: 0,
})

function increment() {
  this.clicked++;
}
