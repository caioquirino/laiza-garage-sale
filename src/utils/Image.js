export const mapImageUrls = (imageUrls) => {
  return imageUrls.map((url) => {
    return url.startsWith("img") ? process.env.PUBLIC_URL + "/" + url : url;
  });
};
