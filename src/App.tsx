import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { Toaster } from "react-hot-toast";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import { getPhotos } from "./services/api";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { Images, SearchPhotos } from "./App.types";

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState<Images[]>([]);
  const [error, setError] = useState<null | Error>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalSrc, setModalSrc] = useState<string>("");
  const [modalAlt, setModalAlt] = useState<string>("");
  const [modalAuthor, setModalAuthor] = useState<string>("");
  const [modalLikes, setModalLikes] = useState<number>(0);
  const [modalLink, setModalLink] = useState<string>("");

  useEffect(() => {
    if (!query) return;
    const handleSearch = async () => {
      setLoading(true);
      try {
        const { results, total_pages }: SearchPhotos = await getPhotos(
          query,
          page
        );
        if (!results.length) {
          return setIsEmpty(true);
        }
        setImages((prevImages) => [...prevImages, ...results]);
        setIsVisible(page < total_pages);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    handleSearch();
  }, [query, page]);

  const getQuery = (inputValue: string): void => {
    setQuery(inputValue);
    setImages([]);
    setPage(1);
    setError(null);
    setIsEmpty(false);
    setIsVisible(false);
  };

  const handleLoadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalSrc("");
    setModalAlt("");
    setModalAuthor("");
    setModalLink("");
    setModalLikes(0);
  };

  const openModal = (
    modalSrc: string,
    modalAlt: string,
    modalAuthor: string,
    modalLikes: number,
    modalLink: string
  ) => {
    setModalSrc(modalSrc);
    setModalAlt(modalAlt);
    setModalAuthor(modalAuthor);
    setModalLikes(modalLikes);
    setModalLink(modalLink);
    setModalIsOpen(true);
  };

  return (
    <div>
      <SearchBar onSubmit={getQuery} />
      {!error && !isEmpty && !images.length && (
        <ErrorMessage textAlign="center">Let`s begin search.</ErrorMessage>
      )}
      {loading && <Loader />}

      <Toaster position="top-right" reverseOrder={false} />
      {error && (
        <ErrorMessage textAlign="center">
          Whoops, something went wrong! Please try reloading this page!
        </ErrorMessage>
      )}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}

      {images.length > 0 && isVisible && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} disabled={loading}></LoadMoreBtn>
      )}

      {isEmpty && (
        <ErrorMessage textAlign="center">
          Sorry, we couldn`t find an image.
        </ErrorMessage>
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={modalSrc}
        alt={modalAlt}
        author={modalAuthor}
        likes={modalLikes}
        link={modalLink}
      />
    </div>
  );
};

export default App;
