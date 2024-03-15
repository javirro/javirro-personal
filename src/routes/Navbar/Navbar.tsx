import { Link, useLocation } from "react-router-dom"
import { imgs } from "../../images"
import "./Navbar.css"
const Navbar = () => {
  const location = useLocation()
  const isLanding = location.pathname === "/"
  return (
    <nav>
      <div>
        {isLanding ? (
          <strong>Javier Rodríguez</strong>
        ) : (
          <Link to="/" className="link">
            <img src={imgs.downArray} alt="Down array" />
            <span>Back</span>
          </Link>
        )}

        <div className="images-container">
          <img src={imgs.linkedin} alt="Linkedin" />
          <img src={imgs.github} alt="Github" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
