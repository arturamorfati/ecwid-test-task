import { useQuery } from "@tanstack/vue-query";
import { useEcwidApi } from "./useEcwid";
import type { CategoriesParams } from "./types";

export const useCategories = (params: CategoriesParams = {}) => {
  const api = useEcwidApi();

  return useQuery({
    queryKey: ["categories", params],
    queryFn: () => api.getCategories(params),
  });
};
