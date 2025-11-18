<script setup lang="ts">
import CartIcon from "~/components/CartIcon.vue";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import Button from "~/components/ui/button/Button.vue";

const route = useRoute();
const router = useRouter();

const showBackButton = computed(() => route.path !== "/");

const goBack = () => router.back();
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white shadow p-4 flex justify-between items-center sticky top-0">
      <div class="flex items-center gap-4">
        <Button
          v-if="showBackButton"
          class="px-3 py-1 border rounded inline-flex items-center gap-2"
          @click="goBack"
        >
          ← Back
        </Button>

        <NuxtLink
          to="/"
          class="text-xl font-bold"
        >
          My Shop
        </NuxtLink>
      </div>

      <NuxtLink to="/cart">
        <CartIcon />
      </NuxtLink>
    </header>

    <main class="flex-1 container mx-auto p-4">
      <slot />
    </main>

    <footer class="bg-gray-100 p-4 text-center text-sm">© 2025 My Shop</footer>
  </div>
</template>
