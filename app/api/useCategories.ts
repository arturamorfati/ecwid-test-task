import { useQuery } from "@tanstack/vue-query";
import { useEcwidApi } from "./useEcwid";

export const useCategories = () => {
  const api = useEcwidApi();

  return useQuery({
    queryKey: ["categories"],
    queryFn: () => api.getCategories(),
  });
};
