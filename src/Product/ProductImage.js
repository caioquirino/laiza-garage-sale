import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

export const ProductImage = ({ imageUrls }) => {
  const [toggler, setToggler] = useState(false);
  const [firstImage] = imageUrls;

  const onClick = (e) => {
    e.preventDefault();
    setToggler(!toggler);
  };

  return (
    <>
      <FsLightbox toggler={toggler} sources={imageUrls} type="image" />

      <a href="/#" onClick={onClick}>
        <img src={firstImage} alt={firstImage} />
      </a>
    </>
  );
};
