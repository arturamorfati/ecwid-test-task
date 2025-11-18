<script setup lang="ts">
import { useRoute } from "vue-router";
import { useProduct } from "~/api/useProduct";
import ProductDetails from "~/components/ProductDetails.vue";
import ProductDetailsSkeleton from "~/components/skeletons/ProductDetailsSkeleton.vue";

const route = useRoute();
const productId = Number(route.params.id);

const { data: productData, isLoading } = useProduct(productId);
</script>

<template>
  <ProductDetailsSkeleton v-if="isLoading || !productData" />
  <ProductDetails
    v-else
    :product="productData"
  />
</template>
