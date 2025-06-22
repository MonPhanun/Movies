import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";
import type { MovieModel } from "../Models/movieModel";
import PaginationControls from "../components/Pagination";
import { Link } from "react-router-dom";
import PopularCard from "../components/PopularCard";
import { useGlobalState } from "../globalState/globalState";
import { getLocalStorage, setLocalStorage } from "../services/localStorage";
import type { HomePageRestoreModel } from "../Models/homePageRestoreModel";
import MovieCardSwitch from "../components/MovieCardSwitch";

const homeContain: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  paddingTop: "20px",
  paddingBottom: "20px",
  gap: "10px",
};

const popularContain: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  overflowX: "scroll",
  justifyContent: "start",
  paddingTop: "20px",
  paddingBottom: "20px",
  gap: "10px",
};

const header: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  flexWrap: "wrap",
  overflowX: "scroll",
  justifyContent: "space-between",
  paddingTop: "20px",
  paddingBottom: "0px",
  fontSize: "22px",
  fontWeight: "bold",
};

const Home = () => {
  const [bass_url_img, setBaseImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState<MovieModel>();
  const [popular, setPopular] = useState<MovieModel>();
  const [page, setPage] = useState(1);
  const [switchUI, setSwitchUI] = useState(false);
  //
  const [startPage, setStartPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  //
  const [, setGlobal] = useGlobalState("search");

  const getMovies = (page: number) => {
    fetch(
      `${import.meta.env.VITE_BASE_URL_API}/3/discover/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&page=${page}`
    )
      .then((res) => res.json())
      .then((json) => {
        setMovie(json);
        setLoading(true);
      });
  };

  const getPopularMovies = () => {
    fetch(
      `${import.meta.env.VITE_BASE_URL_API}/3/movie/now_playing?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((json) => {
        setPopular(json);
      });
  };

  useEffect(() => {
    //get page to restore
    getLocalStore();
    // set base url image
    setBaseImg(import.meta.env.VITE_BASE_URL_IMG);
    // get popular movies
    getPopularMovies();

    setGlobal(true);
  }, []);

  const getLocalStore = () => {
    const getLocal: HomePageRestoreModel = getLocalStorage("home");
    if (getLocal) {
      setPage(getLocal.page);
      setStartPage(getLocal.startPage);
      setTotalPage(getLocal.totalPage);
      //get  movies
      getMovies(getLocal.page);
    } else {
      getMovies(page);
    }
  };

  const pageChange = (val: number) => {
    setPage(val);
    setLoading(false);
    getMovies(val);
    // console.log(val);
    //change pagination UI
    if (val % 10 == 0 && val == totalPage) {
      1; //
      setStartPage(val);
      setTotalPage(val + 10);
      //
    } else if (val % 10 == 0 && val < totalPage) {
      //
      if (val % 10 == 0 && totalPage > 10) {
        setStartPage(val - 10 + 1);
        setTotalPage(totalPage - 10);
      }
      //
    } else if (val < 10 && totalPage > 10) {
      //
      setStartPage(val - 8);
      setTotalPage(totalPage - 10);
      //
    } else if (val % 10 == 9 && val > 10) {
      //
      setStartPage(val - 9 + 1);
      setTotalPage(totalPage - 10);
      //
    }
    const localStore = {
      page: val,
      startPage: startPage,
      totalPage: totalPage,
    } as HomePageRestoreModel;

    setLocalStorage("home", localStore);

    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  const onSwitchChange = () => {
    setSwitchUI(!switchUI);
  };

  return (
    <>
      {loading ? (
        <>
          {page == 1 ? (
            <>
              <div style={header} className="popular">
                <div>Popular and playing in theaters now</div>
                <div>
                  <Link to={"/playing"}>
                    <button className="btn-play">Playing Now</button>
                  </Link>
                  <Link to={"/toprated"}>
                    <button className="btn-play">Top Rated</button>
                  </Link>
                </div>
              </div>
              <div style={popularContain}>
                {popular?.results.map((e) => (
                  <Link
                    key={e.id}
                    className="link-style"
                    to={`/detail/${e.id}`}
                  >
                    {" "}
                    <PopularCard
                      id={e.id}
                      url={`${bass_url_img}${e.poster_path}`}
                      title={e.title}
                      description={e.overview}
                    />
                  </Link>
                ))}
              </div>
            </>
          ) : (
            ""
          )}
          <div style={header}>
            <div> All Movie</div>
            <div className="switch-contain">
              Switch UI
              <label className="switch">
                <input type="checkbox" onChange={onSwitchChange} />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          {!switchUI ? (
            <div style={homeContain}>
              {movie?.results.map((e) => (
                <Link key={e.id} className="link-style" to={`/detail/${e.id}`}>
                  {" "}
                  <MovieCard
                    id={e.id}
                    url={`${bass_url_img}${e.poster_path}`}
                    title={e.title}
                    description={e.overview}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div style={header}>
              {movie?.results.map((e) => (
                <Link key={e.id} className="link-style" to={`/detail/${e.id}`}>
                  {" "}
                  <MovieCardSwitch
                    src={`${bass_url_img}${e.poster_path}`}
                    title={e.title}
                    release={e.release_date}
                    country={""}
                    runtime={90}
                    budget={100}
                    voteAverage={e.vote_average}
                    voteCount={e.vote_count}
                    overview={e.overview}
                  />
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Loading />
      )}
      <div>
        <PaginationControls
          startPage={startPage}
          totalPages={totalPage}
          currentPage={page}
          onPageChange={pageChange}
        />
      </div>
      <div style={{ padding: "40px" }}></div>
    </>
  );
};

export default Home;
