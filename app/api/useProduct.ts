import { useQuery } from "@tanstack/vue-query";
import { useEcwidApi } from "./useEcwid";

export const useProduct = (id: number) => {
  const api = useEcwidApi();
  
  return useQuery({ queryKey: ["product", id], queryFn: () => api.getProduct(id) });
};
