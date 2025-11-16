<script setup lang="ts">
import Button from "./components/ui/button/Button.vue";
import { useCategories } from "./api/useCategories";
import { useProducts } from "./api/useProducts";
import { useProduct } from "./api/useProduct";

const { data: categories } = useCategories();
const { data: products } = useProducts();
const { data: product } = useProduct(1);
</script>

<template>

  <div>
    <Button>button</Button>
  </div>
</template>
