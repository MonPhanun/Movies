import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import CheckConnection from "../components/CheckCconnection";


const LayOut = ()=>{

    //
    return (
    <>
    <div className="container-page">
    <div className="header">
    <Header/>
    </div>
    <div>
        <CheckConnection 
           
           />
    </div>
    <div>
        <Outlet/>
    </div>
    </div>
    </>)
}


export default LayOut;