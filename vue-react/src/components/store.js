import { TO_HANDLER_KEY } from '@vue/compiler-core';
import { toHandlerKey, toValue } from 'vue'
import { ref } from "vue";

import { reactive } from 'vue';

export const store = reactive({
  cart: [],
});

export function cartValue(item) {
  store.cart.push(item);
}

export function removeFromCart(index) {
  store.cart.splice(index, 1);
}
