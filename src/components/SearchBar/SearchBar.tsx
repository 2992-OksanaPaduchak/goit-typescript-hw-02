import toast from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import s from "./SearchBar.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
interface SearchBarProps {
  onSubmit: (query: string) => void;
}
const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query.trim()) {
      return toast.error(
        "Please enter a search term to find images and photos."
      );
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.input}
          type="text"
          name="search"
          onChange={handleChange}
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.btn} type="submit">
          <FiSearch size="24px" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
