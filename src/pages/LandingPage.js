import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";

export function LandingPage() {
  const [query] = useSearchParams();
  const search = query.get("search");
  const debouncedSearch = useDebounce(search, 700);
  return (
    <>
      <Header />
      <Search />
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </>
  );
}
