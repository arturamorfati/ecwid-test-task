<script setup lang="ts">
import type { Product } from "~/api/types";
import { defineProps, computed } from "vue";
import { useCartStore } from "~/stores/cart";
import Card from "./ui/card/Card.vue";
import Button from "./ui/button/Button.vue";

const props = defineProps<{ product: Product }>();
const cartStore = useCartStore();

const buy = () => cartStore.add(props.product);

const imageSrc = computed(() =>
  props.product.imageUrl ||
  props.product.originalImageUrl
);
</script>

<template>
  <Card class="p-4 h-full flex flex-col">
    <NuxtLink :to="`/products/${product.id}`" class="flex-1">
      <NuxtImg
        :src="imageSrc"
        format="webp"
        width="400"
        height="400"
        densities="[1, 2]"
        placeholder="blur"
        class="w-full aspect-square object-cover rounded-md"
        :alt="`${product.name} thumbnail`"
      />

      <h3 class="text-lg font-semibold mt-3">{{ product.name }}</h3>

      <div class="mt-auto flex justify-between items-center pt-2">
        <p>Price:</p>
        <p class="text-gray-600">€ {{ product.price.toFixed(2) }}</p>
      </div>
    </NuxtLink>

    <Button class="w-full mt-3" @click="buy">Buy</Button>
  </Card>
</template>
