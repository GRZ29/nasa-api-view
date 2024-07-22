import { ImagesData } from "@/types";
import { getRequest } from "./common";

async function listNasaImages(search: string) {
  return getRequest<ImagesData>(`/search?q=${search}&media_type=image`);
}

async function listPictureNasaDay() {
  return getRequest<ImagesData>(
    `/planetary/apod?api_key=kMmbiY0Y31Sq461NMWgVFWnDbK7HEihtRyIUCyZM`
  );
}

export const nasaData = {
  listNasaImages: listNasaImages,
  listPictureNasaDay: listPictureNasaDay,
};
