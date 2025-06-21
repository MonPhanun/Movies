import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayOut from "../pages/layOut";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";




const RouterPage = ()=>{
    return  <>
    <BrowserRouter>
        <Routes>
            <Route element={<LayOut/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/detail' element={<MovieDetail/>}/>
            </Route>

        </Routes>
        </BrowserRouter>
    </>
}


export default RouterPage;