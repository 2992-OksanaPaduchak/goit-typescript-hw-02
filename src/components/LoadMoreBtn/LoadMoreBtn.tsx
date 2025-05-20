import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
  disabled: boolean;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick, disabled }) => {
  return (
    <div className={s.text}>
      <button onClick={onClick} disabled={disabled} className={s.btn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
