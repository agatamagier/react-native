import { useQuery } from "@tanstack/react-query";

const fetcher = async (url, options = {}) => {
  try {
    const response = await fetch(
      `${process.env.EXPO_PUBLIC_API_URL}${url}`,
      options
    );
    const data = await response.json();

    // obsluga danych

    return data;
  } catch (e) {
    // obsluga bledow
  }
};

export const useCharacterByIdGet = (id) => {
  return useQuery({
    queryFn: () => fetcher(`/character/${id}`),
    queryKey: ["character", id],
  });
};
