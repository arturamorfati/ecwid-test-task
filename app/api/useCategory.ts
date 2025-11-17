import { useQuery } from "@tanstack/vue-query";
import { useEcwidApi } from "./useEcwid";

export const useCategory = (id: number) => {
  const api = useEcwidApi();
  
  return useQuery({ queryKey: ["category", id], queryFn: () => api.getCategory(id) });
};
