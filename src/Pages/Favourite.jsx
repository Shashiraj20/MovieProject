import { useMovieContext } from "../Contexts/MovieContext";
import "../css/favourites.css";
import MovieCard from "../components/MovieCard";

function Favourite() {
  const { favourite } = useMovieContext();
  if (favourite) {
    return (
      <div className="favourite">
        <h2>Your Favourite</h2>
      <div className="movies-grid">
        {favourite.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
        </div>
        </div>
    );
  }
  return (
    <div className="favourite-empty">
      <h2>Not Favourite Movies Yet...</h2>
      <p>Start adding Movies with your favourite and they will appear here..</p>
    </div>
  );
}
export default Favourite;
