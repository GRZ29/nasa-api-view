import { client } from "@/lib/client";
import { queryKeysFactory } from "@/lib/query-key-factory";
import { ImagesData, PictureDay } from "@/types";
import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";

const NASA_API_IMAGES = "nasa-api-images" as const;
export const nasaApiImages = queryKeysFactory(NASA_API_IMAGES);

export function useApiNasaImages(
  query: string,
  options?: Omit<
    UseQueryOptions<ImagesData, Error, ImagesData, QueryKey>,
    "queryKey" | "queryFn"
  >
) {

  return useQuery({
    queryKey: nasaApiImages.list(query),
    queryFn: () => client.nasaData.listNasaImages(query),
    ...options,
  });
}

export function useApiNasaPictureDay(
  options?: Omit<
    UseQueryOptions<PictureDay, Error, PictureDay, QueryKey>,
    "queryKey" | "queryFn"
  >
) {

  return useQuery({
    queryKey: nasaApiImages.all,
    queryFn: () => client.nasaData.listPictureNasaDay(),
    ...options,
  });
}

