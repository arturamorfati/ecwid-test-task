# Ecwid Test Task - Vue.js / Nuxt 4

## Overview

This project is a demo e-commerce application built as a **test task** for a TypeScript/Vue.js developer role at Ecwid.  
It implements a simple online store using **Nuxt 4**, **TypeScript**, **Vue 3**, and integrates with the **Ecwid REST API**.

The app includes:

- Product and category listing
- Product details page
- Shopping cart with persistent storage via cookies
- "Place order" functionality
- SSR-friendly routing and state management

## Live Demo

> (Add your demo URL here if available)

## Technologies

- [Nuxt 4](https://nuxt.com/)
- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Pinia](https://pinia.vuejs.org/) (state management)
- [TanStack Query](https://tanstack.com/query/latest) (data fetching)
- [TailwindCSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- Ecwid REST API (demo store)

## Features

### Pages

1. **Home / Categories & Products**
   - Grid layout for categories and products
   - Clicking a category opens the category page with subcategories and products
   - Clicking a product opens its details page

2. **Product Page**
   - Displays product name, image, price, description
   - "Buy" button adds product to cart
   - Loading state handled with a custom loader component

3. **Cart**
   - Shows all added items
   - Item quantity is editable
   - Remove single item or clear entire cart
   - "Place order" button displays a confirmation message

### Cart Behavior

- Persistent storage via cookies (`useCookie`) to survive page reloads
- Global reactive state using Pinia
- Cart icon with dynamic item count visible on all pages

### API

- Fetches categories and products from Ecwid REST API
- Uses a **demo store**:
  - **StoreID:** 108362264
  - **Token:** `public_RiNvjTVVzKLhFNWyzR5fNY68u1GMHLEs`

### Routing

- URL reflects current page
- Navigation is fully SSR-friendly via Nuxt 4 and Vue Router

## Installation

Clone the repository and install dependencies:

```bash
git clone <repo_url>
cd ecwid-test-task
npm install
