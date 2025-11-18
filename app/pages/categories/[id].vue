<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

import { useProducts } from "~/api/useProducts";
import { useCategories } from "~/api/useCategories";
import { useCategory } from "~/api/useCategory";

import CategoryCard from "~/components/CategoryCard.vue";
import ProductCard from "~/components/ProductCard.vue";
import CategoryCardSkeleton from "~/components/skeletons/CategoryCardSkeleton.vue";
import ProductCardSkeleton from "~/components/skeletons/ProductCardSkeleton.vue";

const route = useRoute();
const categoryId = Number(route.params.id);

const { data: categoryData, isLoading: catLoading } = useCategory(categoryId);

const { data: subcategoriesData, isLoading: subLoading } = useCategories({
  parent: categoryId,
});

const { data: productsData, isLoading: prodLoading } = useProducts({
  category: categoryId,
});

const category = categoryData;
const subcategories = computed(() => subcategoriesData.value?.items || []);
const products = computed(() => productsData.value?.items || []);
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">
      <span v-if="!catLoading">{{ category?.name }}</span>
      <span
        v-else
        class="block h-6 w-48 bg-gray-200 rounded animate-pulse"
      />
    </h1>

    <div
      v-if="subcategories.length"
      class="mb-10"
    >
      <h2 class="text-xl font-semibold mb-3">Subcategories</h2>

      <div
        class="grid gap-4"
        style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))"
      >
        <template v-if="!subLoading">
          <CategoryCard
            v-for="cat in subcategories"
            :key="cat.id"
            :category="cat"
          />
        </template>

        <template v-else>
          <CategoryCardSkeleton
            v-for="i in 3"
            :key="i"
          />
        </template>
      </div>
    </div>

    <h2 class="text-xl font-semibold mb-3">Products</h2>

    <div
      v-if="!prodLoading && products.length"
      class="grid gap-4"
      style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))"
    >
      <ProductCard
        v-for="prod in products"
        :key="prod.id"
        :product="prod"
      />
    </div>

    <div
      v-else-if="prodLoading"
      class="grid gap-4"
      style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))"
    >
      <ProductCardSkeleton
        v-for="i in 6"
        :key="i"
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
