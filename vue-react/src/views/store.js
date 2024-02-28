import { reactive } from 'vue'
import { ref } from "vue";
let clicked = ref(0);

export const store = reactive({
})

function increment() {
  this.clicked++;
}

//decrement

//cart
