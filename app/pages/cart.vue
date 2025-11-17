<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
import CartItem from "~/components/CartItem.vue";
import Button from "~/components/ui/button/Button.vue";

const cartStore = useCartStore();
const items = cartStore.items;
const totalPrice = cartStore.totalPrice;

const placeOrder = () => {
  alert("Congratulations! Your order is placed.");
  cartStore.clear();
};

const clearCart = () => {
  cartStore.clear();
};
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Shopping Cart</h1>

    <div v-if="items.length === 0">Cart is empty</div>

    <div v-else>
      <CartItem
        v-for="item in items"
        :key="item.productId"
        :item="item"
      />
      <p class="text-xl font-semibold mt-4">Total: € {{ totalPrice.toFixed(2) }}</p>
      <div class="flex gap-2 mt-4">
        <Button @click="placeOrder">Place Order</Button>
        <Button
          class="bg-red-500 hover:bg-red-600"
          @click="clearCart"
          >Clear Cart</Button
        >
      </div>
    </div>
  </div>
</template>
