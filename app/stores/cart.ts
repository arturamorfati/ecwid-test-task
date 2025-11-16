// app/stores/cart.ts
import { defineStore } from "pinia";
import { computed } from "vue";
import { useLocalStorage } from "@vueuse/core";
import type { Product } from "~/api/types";

export interface CartItemSnapshot {
  id: number;
  name: string;
  price: number;
  imageUrl?: string;
}

export interface CartItem {
  productId: number;
  qty: number;
  snapshot: CartItemSnapshot;
}

export const useCartStore = defineStore("cart", () => {
  const items = useLocalStorage<CartItem[]>("ecwid_cart", []);

  const add = (product: Product, qty = 1) => {
    const idx = items.value.findIndex((i) => i.productId === product.id);
    if (idx >= 0) {
      if (items.value[idx]) {
        items.value[idx].qty += qty;
      }
    } else {
      items.value.push({
        productId: product.id,
        qty,
        snapshot: {
          id: product.id,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl || product?.galleryImages?.[0]?.imageUrl,
        },
      });
    }
  };

  const remove = (productId: number) => {
    items.value = items.value.filter((i) => i.productId !== productId);
  };

  const clear = () => {
    items.value = [];
  };

  const count = computed(() => items.value.reduce((sum, i) => sum + i.qty, 0));

  const totalPrice = computed(() => items.value.reduce((sum, i) => sum + i.qty * i.snapshot.price, 0));

  return { items, add, remove, clear, count, totalPrice };
});
