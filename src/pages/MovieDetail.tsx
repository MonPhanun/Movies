import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { MovieDetailModel } from "../Models/movieDetailModel";
import Loading from "../components/Loading";
import "./../styles/MovieDetail.scss";
import ImageWithSkeleton from "../components/LoadingImage";
import { useGlobalState } from "../globalState/globalState";

const detailContain: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "20px",
  gap: "10px",
};

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [bass_url_img, setBaseImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [itemDetail, setItem] = useState<MovieDetailModel>();
  //
  const [, setGlobal] = useGlobalState("search");

  useEffect(() => {
    setGlobal(false);
    setBaseImg(import.meta.env.VITE_BASE_URL_IMG);
    if (id) {
      getMovies(id);
    }
  }, []);

  const getMovies = (id: string) => {
    fetch(
      `${import.meta.env.VITE_BASE_URL_API}/3/movie/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((json) => {
        setItem(json);
        setLoading(true);

        // console.log(json)
      });
  };

  // const getMoviesWatch=(id:string)=>{
  //     fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=0009583dfccef18be9f563c6f2b45a7e`)
  //     .then(res=>res.json())
  //     .then(json=>{

  //         console.log(json)
  //     })
  // }

  return (
    <div className="detail-contain">
      {loading ? (
        <div style={detailContain}>
          <div className="detail">
            <div className="thumnail">
              <ImageWithSkeleton
                src={bass_url_img + itemDetail?.poster_path}
                height="370px"
                width="100%"
              />
              <div className="display">
                <button className="btn-play">Play</button>
              </div>
            </div>
            <div className="descripton">
              <div className="img">
                <ImageWithSkeleton
                  src={bass_url_img + itemDetail?.poster_path}
                  height="270px"
                  width="200px"
                />
              </div>
              <div className="dsc-name">
                <div className="title">{itemDetail?.title}</div>
                <div>
                  {itemDetail?.release_date} |{" "}
                  {itemDetail!.production_countries.length > 0
                    ? itemDetail?.production_countries[0].name
                    : ""}
                </div>
                <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                  {Math.floor(itemDetail!.runtime / 60)} :{" "}
                  {itemDetail!.runtime % 60} Hours
                </div>
                <div className="category">
                  {itemDetail?.genres.map((e) => {
                    return (
                      <div key={e.id} className="cate-name">
                        {e.name} |
                      </div>
                    );
                  })}
                </div>
                <div className="budget">Budget : {itemDetail?.budget}</div>
                <div className="budget">
                  Vote Average : {itemDetail?.vote_average} |{" "}
                  {`(${itemDetail?.vote_count} votes)`}
                </div>
                <div className="overview">
                  <div className="over-title">Overview</div>
                  <div className="over-detail">{itemDetail?.overview}</div>
                </div>
              </div>
            </div>

            <div className="company">
              <div className="com-header">Product of companies :</div>
              <div className="com-img">
                {itemDetail?.production_companies.map((e) => {
                  return (
                    <div key={e.id}>
                      <ImageWithSkeleton
                        imgClass="img-contain"
                        src={bass_url_img + e.logo_path}
                        height="180px"
                        width="170px"
                      />
                      <div className="com-name">{e.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MovieDetail;
