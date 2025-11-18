<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
import { computed } from "vue";
import Button from "./ui/button/Button.vue";

const cartStore = useCartStore();

const count = computed(() => (cartStore?.count ? cartStore.count : 0));

</script>

<template>
  <Button
    variant="secondary"
  >
    Cart ({{ count }})
  </Button>
</template>
