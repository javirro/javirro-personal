import { imgs } from "../../images"
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav>
      <div>
        <strong>Javier Rodríguez</strong>
        <div className="images-container">
          <img src={imgs.linkedin} alt="Linkedin" />
          <img src={imgs.github} alt="Github" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
