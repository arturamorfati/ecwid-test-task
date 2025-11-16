<script setup lang="ts">
import { useRoute } from "vue-router";
import { useProduct } from "~/api/useProduct";
import { useCartStore } from "~/stores/cart";

const route = useRoute();
const productId = Number(route.params.id);
const { data: productData } = useProduct(productId);

const product = productData.value!;
const cartStore = useCartStore();

const buy = () => cartStore.add(product);
</script>

<template>
  <div class="container mx-auto p-4">
    <img
      :src="product.imageUrl"
      class="w-full h-96 object-cover rounded-md mb-4"
    />
    <h1 class="text-3xl font-bold mb-2">{{ product.name }}</h1>
    <p class="text-gray-600 mb-2">€ {{ product.price.toFixed(2) }}</p>
    <div
      v-html="product.description"
      class="mb-4"
    ></div>
    <Button @click="buy">Buy</Button>
  </div>
</template>
