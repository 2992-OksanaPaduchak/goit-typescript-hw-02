import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    maxWidth: "600px",
    width: "100%",
    borderRadius: "12px",
    color: "#5e5d5d",
  },
  overlay: {
    background: "rgba(49, 48, 48, 0.6)",
  },
};
Modal.setAppElement("#root");
interface ImageModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  src: string;
  alt: string;
  author: string;
  likes: number;
  link: string;
}
const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  src,
  alt,
  author,
  likes,
  link,
}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            style={{ width: "100%", borderRadius: "10px" }}
          />
        ) : null}
        <h3>{alt}</h3>
        <p>Author: {author}</p>
        <p>Likes: {likes}</p>
        <a href={link} target="_blank" rel="noreferrer">
          View on Unsplash
        </a>
      </Modal>
    </div>
  );
};

export default ImageModal;
