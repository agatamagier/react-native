import { useQuery } from "@tanstack/react-query";

// useQuery => GET
// useMutation => POST, PATCH, DELETE, PUT

export const useCharactersGet = () => {
  return useQuery({
    queryKey: ["characters"],
    queryFn: () =>
      fetch(`${process.env.EXPO_PUBLIC_API_URL}/character`).then((response) =>
        response.json()
      ),
  });
};
