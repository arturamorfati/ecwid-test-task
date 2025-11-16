<script setup lang="ts">
import type { CartItem } from "~/stores/cart";
import { defineProps } from "vue";
import { useCartStore } from "~/stores/cart";

const props = defineProps<{ item: CartItem }>();
const cartStore = useCartStore();

const remove = () => cartStore.remove(props.item.productId);
</script>

<template>
  <div class="flex items-center justify-between p-2 border-b">
    <div class="flex items-center gap-2">
      <img
        :src="item.snapshot.imageUrl"
        class="w-16 h-16 object-cover rounded-md"
      />
      <div>
        <p class="font-semibold">{{ item.snapshot.name }}</p>
        <p>€ {{ item.snapshot.price.toFixed(2) }} x {{ item.qty }}</p>
      </div>
    </div>
    <Button
      variant="destructive"
      @click="remove"
      >Delete</Button
    >
  </div>
</template>
