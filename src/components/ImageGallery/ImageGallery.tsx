import React from "react";
import { Images } from "../../App.types";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Images[];
  openModal: (
    url: string,
    description: string,
    userName: string,
    likes: number,
    link: string
  ) => void;
}
const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={s.ul}>
      {images.map((image) => (
        <li className={s.li} key={image.id}>
          <div>
            <ImageCard
              url={image.urls.small}
              description={image.description}
              openModal={() =>
                openModal(
                  image.urls.regular,
                  image.description,
                  image.user.name,
                  image.likes,
                  image.links.html
                )
              }
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
