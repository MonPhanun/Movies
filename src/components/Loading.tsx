
import "./../styles/Loading.scss"

const Loading = ()=>{
    return (
       <div className="loading-contain">
         <div className="loading-container">
        <div className="loader"></div>
            <p className="loading-text">Loading...</p>
        </div>
       </div>
    )
}

export default Loading;