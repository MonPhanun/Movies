import "./../styles/movieCardSwitch.scss";
import ImageWithSkeleton from "./LoadingImage";

interface Props {
  src: string;
  title: string;
  release: string;
  country: string;
  runtime: number;
  budget: number;
  voteAverage: number;
  voteCount: number;
  overview: string;
}

const MovieCardSwitch = (prop: Props) => {
  return (
    <>
      <div className="descriptons">
        <div className="imgs">
          <ImageWithSkeleton src={prop.src} height="270px" width="200px" />
        </div>
        <div className="dsc-name">
          <div className="title">{prop.title}</div>
          <div>
            {prop.release} | {prop.country}
          </div>
          <div style={{ fontSize: "14px", fontWeight: "bold" }}>
            {Math.floor(prop.runtime / 60)} : {prop.runtime % 60} Hours
          </div>
          <div className="budget">Budget : {prop.budget} USD</div>
          <div className="budget">
            Vote Average : {prop.voteAverage} | {`(${prop.voteAverage} votes)`}
          </div>
          <div className="overview">
            <div className="over-title">Overview</div>
            <div className="over-detail">{prop.overview}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCardSwitch;
