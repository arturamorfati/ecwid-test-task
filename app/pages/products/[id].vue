<script setup lang="ts">
import { useRoute } from "vue-router";
import { useProduct } from "~/api/useProduct";
import { useCartStore } from "~/stores/cart";
import Button from "~/components/ui/button/Button.vue";
import MyLoader from "~/components/MyLoader.vue";

const route = useRoute();
const productId = Number(route.params.id);
const { data: productData } = useProduct(productId);

const product = productData.value;
const cartStore = useCartStore();

const buy = () => {
  if (!product) return;

  cartStore.add(product);
};
</script>

<template>
  <MyLoader v-if="!product" />

  <div
    v-else
    class="container mx-auto p-4"
  >
    <img
      :src="product?.imageUrl"
      class="w-full h-96 object-contain rounded-md mb-4"
    />
    <h1 class="text-3xl font-bold mb-2">{{ product.name }}</h1>
    <p class="text-gray-600 mb-2">€ {{ product.price.toFixed(2) }}</p>
    <p
      v-html="product.description"
      class="mb-4"
    ></p>
    <Button
      class="w-full"
      :disabled="!product"
      @click="buy"
      >Buy</Button
    >
  </div>
</template>
