import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";
import type { MovieModel } from "../Models/movieModel";
import PaginationControls from "../components/Pagination";
import { Link } from "react-router-dom";
import { useGlobalState } from "../globalState/globalState";

const homeContain: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "start",
  paddingTop: "20px",
  paddingBottom: "20px",
  gap: "10px",
};

const header: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  overflowX: "scroll",
  justifyContent: "start",
  paddingTop: "20px",
  paddingBottom: "0px",
  fontSize: "22px",
  fontWeight: "bold",
};

const TopRated = () => {
  const [bass_url_img, setBaseImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState<MovieModel>();
  const [page, setPage] = useState(1);
  //
  const [startPage, setStartPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  //
  const [, setGlobal] = useGlobalState("search");

  const getMovies = (page: number) => {
    fetch(
      `${import.meta.env.VITE_BASE_URL_API}/3/movie/top_rated?api_key=${
        import.meta.env.VITE_API_KEY
      }&page=${page}`
    )
      .then((res) => res.json())
      .then((json) => {
        setMovie(json);
        setLoading(true);
      });
  };

  useEffect(() => {
    setBaseImg(import.meta.env.VITE_BASE_URL_IMG);
    getMovies(page);

    setGlobal(true);
  }, []);

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

    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <>
      {loading ? (
        <>
          <div style={header}> Top Rated</div>
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

export default TopRated;
