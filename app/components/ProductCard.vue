<script setup lang="ts">
import type { Product } from "~/api/types";
import { defineProps } from "vue";
import { useCartStore } from "~/stores/cart";
import Card from "./ui/card/Card.vue";
import Button from "./ui/button/Button.vue";

const props = defineProps<{ product: Product }>();
const cartStore = useCartStore();

const buy = () => cartStore.add(props.product);
</script>

<template>
  <Card class="p-4 h-full flex flex-col">
    <NuxtLink
      :href="`/products/${product.id}`"
      class="flex-1"
    >
      <img
        :src="product.thumbnailUrl"
        class="w-full h-48 object-cover rounded-md"
        :alt="`${product.name} thumbnail`"
      />
      <h3 class="text-lg font-semibold mt-2">{{ product.name }}</h3>

      <div class="h-2" />

      <div class="mt-auto w-full flex justify-between items-center">
        <p>Price:</p>
        <p class="text-gray-600 mt-1">€ {{ product.price.toFixed(2) }}</p>
      </div>
    </NuxtLink>

    <Button
      class="w-full mt-2"
      @click="buy"
      >Buy</Button
    >
  </Card>
</template>
