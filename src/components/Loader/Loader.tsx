import ClipLoader from "react-spinners/ClipLoader";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.backdrop}>
      <ClipLoader
        color="#5a5aad"
        loading={true}
        cssOverride={{}}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
export default Loader;
