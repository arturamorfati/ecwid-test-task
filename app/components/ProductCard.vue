<script setup lang="ts">
import type { Product } from "~/api/types";
import { defineProps } from "vue";
import { useCartStore } from "~/stores/cart";

const props = defineProps<{ product: Product }>();
const cartStore = useCartStore();

const buy = () => cartStore.add(props.product);
</script>

<template>
  <Card class="p-4">
    <img
      :src="product.thumbnailUrl"
      class="w-full h-48 object-cover rounded-md"
    />
    <h3 class="text-lg font-semibold mt-2">{{ product.name }}</h3>
    <p class="text-gray-600 mt-1">€ {{ product.price.toFixed(2) }}</p>
    <Button
      class="mt-2 w-full"
      @click="buy"
      >Buy</Button
    >
  </Card>
</template>
