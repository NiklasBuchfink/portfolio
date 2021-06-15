import { getStrapiMedia } from "~/utils/medias";

export function backgroundStyles(image) {
  return {
    // any other styles you might need to add on as an example
    'background-image': `url(${getStrapiMedia(image.formats.medium.url)})`,
    'title': getStrapiMedia(image.alternativeText)
  }
}