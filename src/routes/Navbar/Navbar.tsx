import { Link, useLocation } from "react-router-dom"
import { imgs } from "../../images"
import "./Navbar.css"

const Navbar = () => {
  const location = useLocation()
  const isLanding = location.pathname === "/"
  return (
    <nav>
      <div className={!isLanding ? "space-around" : ""}>
        {isLanding ? (
          <></>
        ) : (
          <Link to="/" className="link">
            <img src={imgs.downArray} alt="Down array" />
            <span>Back</span>
          </Link>
        )}

        <div className="images-container">
          <a href="https" target="blank_" rel="noreferrer">
            <img src={imgs.linkedin} alt="Linkedin" />
          </a>
          <a href="https" target="blank_" rel="noreferrer">
            <img src={imgs.github} alt="Github" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
