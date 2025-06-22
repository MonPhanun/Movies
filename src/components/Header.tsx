import { Link } from "react-router-dom";
import "./../styles/header.scss";
import MoviewSearch from "./MoviewSearch";
import { useState } from "react";
import type { MovieSearchModel } from "../Models/movieSearchModel";
import Loading from "./Loading";

const Header = () => {
  //
  const [movie, setMovie] = useState<MovieSearchModel>();
  const [emty] = useState<MovieSearchModel>();
  const [input, serInput] = useState("");
  const [loading, setLoading] = useState(false);

  //
  const getMovieSearch = (query: string) => {
    fetch(
      `${import.meta.env.VITE_BASE_URL_API}/3/search/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&query=${query.toLocaleLowerCase()}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMovie(json);
        setLoading(false);
      });
  };

  const onChanges = (val: any) => {
    setLoading(true);
    getMovieSearch(val.target.value.toLocaleLowerCase());
    serInput(val.target.value.toLocaleLowerCase());
  };

  const clearinput = () => {
    serInput("");
    setMovie(emty);
  };

  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <Link className="logo" to={"/"}>
            My Movies
          </Link>{" "}
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <input
                value={input}
                type="text"
                className="search"
                placeholder="search . . ."
                onChange={onChanges}
              />
            </li>
            {/*<li>
              <Link to={"/detail"}>
                <p>Detail</p>
              </Link>{" "}
            </li>
            <li>
              <Link to={"/"}>
                <p>Home</p>
              </Link>{" "}
            </li>
            <li>
              <Link to={"/"}>
                <p>Home</p>
              </Link>{" "}
            </li> */}
          </ul>
          {/* <a href="#" className="btn">Get Started</a> */}
        </nav>

        <div className="result">
          {!loading ? (
            <>
              {movie?.results.map((e) => {
                return (
                  <>
                    <Link
                      onClick={clearinput}
                      key={e.id}
                      className="link-style"
                      to={`/detail/${e.id}`}
                    >
                      <MoviewSearch
                        key={e.id}
                        url={e.poster_path}
                        title={e.title}
                        average={e.vote_average}
                        release={e.release_date}
                        popular={e.popularity}
                      />
                    </Link>
                  </>
                );
              })}
            </>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
