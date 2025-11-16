<script setup lang="ts">
import ProductCard from "~/components/ProductCard.vue";
import CategoryCard from "~/components/CategoryCard.vue";
import { useProducts } from "~/api/useProducts";
import { useCategories } from "~/api/useCategories";
import { computed } from "vue";

const { data: productsData } = useProducts();
const { data: categoriesData } = useCategories();

const products = computed(() => productsData?.value?.items || []);
const categories = computed(() => categoriesData?.value?.items || []);
</script>

<template>

  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Categories</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      <CategoryCard
        v-for="cat in categories"
        :key="cat.id"
        :category="cat"
      />
    </div>

    <h1 class="text-2xl font-bold mb-4">Products</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <ProductCard
        v-for="prod in products"
        :key="prod.id"
        :product="prod"
      />
    </div>
  </div>
</template>
