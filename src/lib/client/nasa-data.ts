import { ImagesData } from "@/types";
import { getRequest } from "./common";

async function listNasaImages() {
  return getRequest<ImagesData>("/search?q=Supernova&media_type=image");
}

export const nasaData = {
    listNasaImages: listNasaImages
};
