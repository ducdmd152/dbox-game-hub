const getCroppedImageUrl = (url: string) => {
  if (!url)
    return "https://studiolegalelisi.it/wp-content/uploads/2021/03/errore-404.jpg";
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
