<script setup lang="ts">
import type { Category } from "~/api/types";
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{ category: Category }>();
const router = useRouter();

const goToCategory = () => router.push(`/category/${props.category.id}`);
</script>

<template>
  <Card class="p-4">
    <img
      :src="category.image || ''"
      class="w-full h-48 object-cover rounded-md"
    />
    <h3 class="text-lg font-semibold mt-2">{{ category.name }}</h3>
    <Button
      class="mt-2 w-full"
      @click="goToCategory"
      >Open</Button
    >
  </Card>
</template>
