<script setup lang="ts">
import ProductCard from "~/components/ProductCard.vue";
import CategoryCard from "~/components/CategoryCard.vue";
import CategoryCardSkeleton from "~/components/skeletons/CategoryCardSkeleton.vue";
import ProductCardSkeleton from "~/components/skeletons/ProductCardSkeleton.vue";

import { useProducts } from "~/api/useProducts";
import { useCategories } from "~/api/useCategories";
import { computed } from "vue";

const { data: productsData, isLoading: isProductsLoading, isFetching: isProductsFetching } = useProducts();

const { data: categoriesData, isLoading: isCategoriesLoading, isFetching: isCategoriesFetching } = useCategories();

const products = computed(() => productsData?.value?.items || []);
const categories = computed(() => categoriesData?.value?.items.filter((c) => !c.parentId) || []);

const showCategorySkeletons = computed(() => isCategoriesLoading.value || isCategoriesFetching.value);

const showProductSkeletons = computed(() => isProductsLoading.value || isProductsFetching.value);
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Categories</h1>

    <div
      class="grid gap-4 mb-8"
      style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))"
    >
      <template v-if="showCategorySkeletons">
        <CategoryCardSkeleton
          v-for="n in 6"
          :key="'cat-skeleton-' + n"
        />
      </template>

      <template v-else>
        <CategoryCard
          v-for="cat in categories"
          :key="cat.id"
          :category="cat"
        />
      </template>
    </div>

    <h1 class="text-2xl font-bold mb-4">Products</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <template v-if="showProductSkeletons">
        <ProductCardSkeleton
          v-for="n in 6"
          :key="'prod-skeleton-' + n"
        />
      </template>

      <template v-else>
        <ProductCard
          v-for="prod in products"
          :key="prod.id"
          :product="prod"
        />
      </template>
    </div>
  </div>
</template>
