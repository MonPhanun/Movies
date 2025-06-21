import { Outlet } from "react-router-dom";
import Header from "../components/Header";




const LayOut = ()=>{
    return (
    <>
    <div className="container-page">
    <div className="header">
    <Header/>
    </div>
    <div>
        <Outlet/>
    </div>
    </div>
    </>)
}


export default LayOut;