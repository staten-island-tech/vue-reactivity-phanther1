import { TO_HANDLER_KEY } from '@vue/compiler-core';
import { reactive, toHandlerKey, toValue } from 'vue'
import { ref } from "vue";
let clicked = ref(0);

export const store = reactive({
})

function increment() {
  this.clicked++;
}

//decrement

//cart

const cart = function () {
}

//price

