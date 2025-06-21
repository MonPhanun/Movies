import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";
import type { MoviewModel } from "../Models/moviesModel";
import { Data } from "../utility/dataMovies";

const homeContain:React.CSSProperties={
    display:"flex",
    flexWrap:"wrap",
    padding:"20px",
    gap:"10px"
}

const Home = ()=>{
    
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(true);
        },3000)
    },[])

    const data:Array<MoviewModel> = Data()
    
    if(loading){
        return (
            <>
           
            <div style={homeContain}>
                {data.map(e=><MovieCard key={e.id} id={e.id} url={e.url} title={e.title} description={e.description}/>)}
                
            </div>
            
            </>)
    }else{
        return (
            <>
            <Loading/>
            </>
        )
    }
    
}

export default Home;