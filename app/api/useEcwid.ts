export const useEcwidApi = () => {
  const storeId = 108362264;
  const token = "public_RiNvjTVVzKLhFNWyzR5fNY68u1GMHLEs";
  const base = `https://app.ecwid.com/api/v3/${storeId}`;

  const get = <T>(path: string, params: Record<string, unknown> = {}) => {
    const query = new URLSearchParams({ token, ...params }).toString();
    return $fetch<T>(`${base}/${path}?${query}`);
  };

  return {
    getCategories: (params = {}) => get("categories", params),
    getCategory: (id: number) => get(`categories/${id}`),
    getProducts: (params = {}) => get("products", params),
    getProduct: (id: number) => get(`products/${id}`),
  };
};
