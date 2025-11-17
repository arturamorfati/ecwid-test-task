<script setup lang="ts">
import CartIcon from "~/components/CartIcon.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white shadow p-4 flex justify-between items-center sticky top-0">
      <NuxtLink
        to="/"
        class="text-xl font-bold"
        >My Shop</NuxtLink
      >

      <CartIcon />
    </header>

    <main class="flex-1 container mx-auto p-4">
      <slot />
    </main>

    <footer class="bg-gray-100 p-4 text-center text-sm">© 2025 My Shop</footer>
  </div>
</template>
