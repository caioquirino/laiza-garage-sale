import React, { MouseEvent, useState } from "react";
import FsLightbox from "fslightbox-react";

type ProductImagePtops = {
  imageUrls: string[]
}

export const ProductImage = ({ imageUrls }: ProductImagePtops) => {
  const [toggler, setToggler] = useState(false);
  const [firstImage] = imageUrls;

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setToggler(!toggler);
  };

  return (
    <>
      <FsLightbox toggler={toggler} sources={imageUrls} type="image" />

      <a href="/#" onClick={onClick}>
        <img src={firstImage} alt={firstImage} loading="lazy" />
      </a>
    </>
  );
};
