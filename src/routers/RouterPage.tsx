import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import LayOut from "../pages/LayOut";




const RouterPage = ()=>{
    return  <>
    <BrowserRouter>
        <Routes>
            <Route element={<LayOut/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/detail/:id' element={<MovieDetail/>}/>
            </Route>

        </Routes>
        </BrowserRouter>
    </>
}


export default RouterPage;