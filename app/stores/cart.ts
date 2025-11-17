import { defineStore } from "pinia";
import { computed } from "vue";
import type { Product } from "~/api/types";
import { useCookie } from "#imports";

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
  const items = useCookie<CartItem[]>("ecwid_cart", {
    default: () => [],
    watch: true,
  });

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
    const idx = items.value.findIndex((i) => i.productId === productId);

    if (idx !== -1) {
      items.value.splice(idx, 1);
    }
  };

  const clear = () => {
    items.value.splice(0, items.value.length);
  };

  const count = computed(() => items.value.reduce((sum, i) => sum + i.qty, 0));

  const totalPrice = computed(() => items.value.reduce((sum, i) => sum + i.qty * i.snapshot.price, 0));

  return { items, add, remove, clear, count, totalPrice };
});
