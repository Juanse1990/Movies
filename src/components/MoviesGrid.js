import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { get } from "../utils/httpClient";
import { Empty } from "./Empty";
import { MoviesCard } from "./MoviesCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";

export function MoviesGrid({ search }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setIsLoading(false);
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
    });
  }, [search, page]);

  if (!isLoading && movies.length === 0) {
    return <Empty />;
  }

  return (
    <>
      <InfiniteScroll
        dataLength={movies.length}
        hasMore={hasMore}
        next={() => setPage((prevPage) => prevPage + 1)}
        loader={<Spinner />}
      >
        <ul className={styles.moviesGrid}>
          {movies.map((movie) => (
            <MoviesCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </InfiniteScroll>
    </>
  );
}
