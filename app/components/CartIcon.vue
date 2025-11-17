<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
import { useRouter } from "vue-router";
import { computed } from "vue";
import Button from "./ui/button/Button.vue";

const cartStore = useCartStore();
const router = useRouter();

const count = computed(() => (cartStore?.count ? cartStore.count : 0));

const goToCart = () => router.push("/cart");
</script>

<template>
  <Button
    variant="secondary"
    @click="goToCart"
  >
    Cart ({{ count }})
  </Button>
</template>
