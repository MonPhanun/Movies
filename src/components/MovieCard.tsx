import type { MoviewModel } from "../Models/moviesModel";
import ImageWithSkeleton from "./LoadingImage";

const contain: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  width: "160px",
  padding: "6px",
  borderRadius: "4px",
  boxShadow:
    " rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
};

const name: React.CSSProperties = {
  whiteSpace: "nowrap",
  fontWeight: "bold",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textAlign: "start",
};

const MovieCard = (props?: MoviewModel) => {
  return (
    <div style={contain} className="movie-card">
      <ImageWithSkeleton src={props?.url} height="170px" />
      {/* <img style={image} src={props?.url} alt="" /> */}

      <div style={name}>{props?.title}</div>
      <div className="dsc-video">{props?.description}</div>
    </div>
  );
};

export default MovieCard;
