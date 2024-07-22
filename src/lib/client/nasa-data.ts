import { ImagesData, PictureDay } from "@/types";
import { getRequest } from "./common";
// import { getRequest as getRequest2 } from "./common2";

async function listNasaImages(search: string) {
  return getRequest<ImagesData>(`/search?q=${search}&media_type=image`);
}

async function listPictureNasaDay() {
  return getRequest<PictureDay>(
    `https://api.nasa.gov/planetary/apod?api_key=kMmbiY0Y31Sq461NMWgVFWnDbK7HEihtRyIUCyZM`
  );
}

export const nasaData = {
  listNasaImages: listNasaImages,
  listPictureNasaDay: listPictureNasaDay,
};
