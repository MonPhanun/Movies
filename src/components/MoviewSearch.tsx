import ImageWithSkeleton from "./LoadingImage";
import "./../styles/movieSearch.scss";

interface props {
  url: string;
  title: string;
  average: number;
  release: string;
  popular: number;
}

const MoviewSearch = (props: props) => {
  return (
    <>
      <div className="search-card">
        <div>
          <ImageWithSkeleton
            src={`${import.meta.env.VITE_BASE_URL_IMG}${props.url}`}
            width="90px"
            height="90px"
          />
        </div>
        <div className="text-content">
          <div className="text-title">{props.title}</div>
          <div className="text-dsc">Average : {`${props.average} (vote)`} </div>
          <div className="text-dsc">Release : {props.release}</div>
          <div className="text-dsc">Pupolarity : {props.popular}</div>
        </div>
      </div>
    </>
  );
};
export default MoviewSearch;
