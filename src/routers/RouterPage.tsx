import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import LayOut from "../pages/LayOut";
import PlayingNow from "../pages/PlayingNow";
import TopRated from "../pages/TopRated";

const RouterPage = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayOut />}>
            <Route path="/" element={<Home />} />
            <Route path="/playing" element={<PlayingNow />} />
            <Route path="/toprated" element={<TopRated />} />
            <Route path="/detail/:id" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterPage;
