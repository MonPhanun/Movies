
import { Link } from "react-router-dom";
import "./../styles/header.scss"

const Header = ()=>{

    return (
        <header className="main-header">
        <div className="container">
          <div className="logo">My Movies</div>
          <nav className="nav">
            <ul className="nav-links">
              <li><Link to={"/"}><p>Home</p></Link> </li>
              <li><Link to={"/detail"}><p>Detail</p></Link> </li>
              <li><Link to={"/"}><p>Home</p></Link> </li>
              <li><Link to={"/"}><p>Home</p></Link> </li>
            </ul>
            {/* <a href="#" className="btn">Get Started</a> */}
          </nav>
        </div>
      </header>
    )
}

export default Header;