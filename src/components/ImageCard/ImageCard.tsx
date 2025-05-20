import s from "./ImageCard.module.css";
interface ImageCardProps {
  url: string;
  description: string;
  openModal: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  url,
  description,
  openModal,
}) => {
  return (
    <div>
      <img className={s.img} src={url} alt={description} onClick={openModal} />
    </div>
  );
};

export default ImageCard;
