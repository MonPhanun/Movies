import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";
import type { MovieModel } from "../Models/movieModel";
import PaginationControls from "../components/Pagination";
import { Link } from "react-router-dom";

const homeContain:React.CSSProperties={
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"start",
    padding:"20px",
    gap:"10px"
}

const Home = ()=>{
    
    const bass_url_img= "https://image.tmdb.org/t/p/w500";
    const [loading,setLoading] = useState(false)
    const [movie,setMovie]= useState<MovieModel>()
    const [page,setPage] = useState(1)
    //
    const [startPage,setStartPage]=useState(1)
    const [totalPage,setTotalPage]=useState(10)

    const getMovies=(page:number)=>{
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0009583dfccef18be9f563c6f2b45a7e&page=${page}`)
        .then(res=>res.json())
        .then(json=>{
            setMovie(json)
            setLoading(true);
        })
    }

    useEffect(()=>{
        getMovies(page);

        console.log(import.meta.env.VITE_API_KEY)
    },[])

    const pageChange=(val:number)=>{
        setPage(val);
        setLoading(false)
        getMovies(val);
        if(val%10==0 && val == totalPage){
            setStartPage(val);
            setTotalPage(val+10);
        }else if(val%10==0 && val < totalPage){
            setStartPage(val-10);
            setTotalPage(totalPage-10);
        }
        
    }

        return (
            <>
               {loading ? <div style={homeContain}>
                    {movie?.results.map(e=><Link key={e.id} className="link-style" to={`/detail/${e.id}`}> <MovieCard  id={e.id} url={`${bass_url_img}${e.poster_path}`} title={e.title} description={e.overview}/></Link>)}  
                </div>: <Loading/>}
                <div>
                    <PaginationControls startPage={startPage} totalPages={totalPage} currentPage={page} onPageChange={pageChange}/>
                </div>
            </>)
    
}

export default Home;