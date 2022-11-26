import styles from "./MoviesCard.module.css";
import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";

export function MoviesCard({ movie }) {
  const imageUrl = getMovieImg(movie.poster_path, 300);
  return (
    <li className={styles.moviesCard}>
      <Link
        to={"/movies/" + movie.id}
        style={{ textDecoration: "none", color: "#fff" }}
      >
        <img
          width={230}
          height={345}
          src={imageUrl}
          alt={movie.title}
          className={styles.moviesImage}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
