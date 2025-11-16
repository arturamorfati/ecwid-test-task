import { useQuery } from "@tanstack/vue-query";
import { useEcwidApi } from "./useEcwid";

export const useProducts = (params = {}) => {
  const api = useEcwidApi();

  return useQuery({ queryKey: ["products", params], queryFn: () => api.getProducts(params) });
};
