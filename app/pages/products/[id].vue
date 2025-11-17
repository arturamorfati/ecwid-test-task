<script setup lang="ts">
import { useRoute } from "vue-router";
import { useProduct } from "~/api/useProduct";
import { useCartStore } from "~/stores/cart";
import Button from "~/components/ui/button/Button.vue";
import MyLoader from "~/components/MyLoader.vue";

const route = useRoute();
const productId = Number(route.params.id);

const { data: productData, isLoading } = useProduct(productId);

const cartStore = useCartStore();

const buy = () => {
  if (!productData.value) return;
  cartStore.add(productData.value);
};
</script>

<template>
  <MyLoader v-if="isLoading ?? !productData" />

  <div
    v-else
    class="container mx-auto p-4"
  >
    <img
      :src="productData.imageUrl"
      class="w-full h-96 object-contain rounded-md mb-4"
    />

    <h1 class="text-3xl font-bold mb-2">
      {{ productData.name }}
    </h1>

    <p class="text-gray-600 mb-2">€ {{ productData.price.toFixed(2) }}</p>

    <p
      v-html="productData.description"
      class="mb-4"
    ></p>

    <Button
      class="w-full"
      @click="buy"
      >Buy</Button
    >
  </div>
</template>
