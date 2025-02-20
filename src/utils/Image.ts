export const mapImageUrls = (imageUrls: string[]): string[] => {
  return imageUrls.map((url) => {
    return url.startsWith("img") ? import.meta.env.PUBLIC_URL + "/" + url : url;
  });
};
