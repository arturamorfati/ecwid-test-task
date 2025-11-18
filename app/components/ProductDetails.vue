<script setup lang="ts">
import { ref } from "vue";
import type { Product } from "~/api/types";
import Button from "./ui/button/Button.vue";
import { useCartStore } from "~/stores/cart";
import { NuxtImg } from "#components";

const props = defineProps<{ product: Product }>();

const mainImage = ref<string | null>(props.product.imageUrl || props.product.thumbnailUrl);
const isImageLoading = ref(false);

const cartStore = useCartStore();

const buy = () => cartStore.add(props.product);

const selectImage = (url: string) => {
  isImageLoading.value = true;
  mainImage.value = url;
};

const onImageLoad = () => {
  isImageLoading.value = false;
};
</script>

<template>
  <div class="container mx-auto p-4 space-y-4">
    <div class="relative w-full h-96">
      <div
        v-if="isImageLoading"
        class="absolute inset-0 bg-gray-200 animate-pulse rounded-md"
      />
      <NuxtImg
        v-if="mainImage"
        :src="mainImage"
        class="w-full h-full object-contain rounded-md"
        width="1200"
        height="1200"
        format="webp"
        priority
        :alt="product.name"
        @load="onImageLoad"
      />
    </div>

    <div class="flex space-x-2 overflow-x-auto mt-2">
      <NuxtImg
        v-for="img in product.media.images"
        :key="img.id"
        :src="img.image400pxUrl"
        class="w-20 h-20 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-blue-500"
        width="400"
        height="400"
        alt="Thumbnail"
        @click="selectImage(img.imageOriginalUrl)"
      />
    </div>

    <h1 class="text-3xl font-bold">{{ product.name }}</h1>
    <p class="text-gray-600 text-xl">€ {{ product.price.toFixed(2) }}</p>
    <div
      class="prose max-w-none"
      v-html="product.description"
    />

    <Button
      class="w-full mt-2"
      @click="buy"
      >Buy</Button
    >
  </div>
</template>
