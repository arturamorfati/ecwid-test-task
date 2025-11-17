<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

import { useProducts } from "~/api/useProducts";

import CategoryCard from "~/components/CategoryCard.vue";
import ProductCard from "~/components/ProductCard.vue";
import MyLoader from "~/components/MyLoader.vue";
import { useCategories } from "~/api/useCategories";
import { useCategory } from "~/api/useCategory";

const route = useRoute();
const categoryId = Number(route.params.id);

const { data: categoryData, isLoading: catLoading } = useCategory(categoryId);

const { data: subcategoriesData, isLoading: subLoading } = useCategories({
  parent: categoryId,
});

const { data: productsData, isLoading: prodLoading } = useProducts({ category: categoryId });

const category = categoryData;
const subcategories = computed(() => subcategoriesData.value?.items || []);
const products = computed(() => productsData.value?.items || []);

const isPageLoading = computed(() => catLoading.value || prodLoading.value || subLoading.value);
</script>

<template>
  <MyLoader v-if="isPageLoading" />

  <div
    v-else
    class="container mx-auto p-4"
  >
    <h1 class="text-3xl font-bold mb-4">
      {{ category?.name }}
    </h1>

    <div
      v-if="subcategories.length"
      class="mb-10"
    >
      <h2 class="text-xl font-semibold mb-3">Subcategories</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <CategoryCard
          v-for="cat in subcategories"
          :key="cat.id"
          :category="cat"
        />
      </div>
    </div>

    <h2 class="text-xl font-semibold mb-3">Products</h2>

    <div
      v-if="products.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
    >
      <ProductCard
        v-for="prod in products"
        :key="prod.id"
        :product="prod"
      />
    </div>

    <p
      v-else
      class="text-gray-500"
    >
      No products in this category.
    </p>
  </div>
</template>
