import { imgs } from "../../images"
import "./FavouriteStack.css"

const FavouriteStack = () => {
  return (
    <div className="fav-stack">
      <h2>⭐ Fav Stack ⭐</h2>
      <div className="stack-container">
        <div className="stack-item">
          <img src={imgs.react} alt="React" />
          <span>React (with Vite or Next v15)</span>
        </div>
        <div className="stack-item">
          <img src={imgs.tailwind} alt="Tailwind" />
          <span>Tailwind</span>
        </div>
        <div className="stack-item">
          <img src={imgs.css} alt="Css" />
          <span>CSS</span>
        </div>
        <div className="stack-item">
          <img src={imgs.typescript} alt="Typescript" />
          <span>TypeScript</span>
        </div>
        <div className="stack-item">
          <img src={imgs.node} alt="Node.js" />
          <span>Node.js</span>
        </div>
        <div className="stack-item">
          <img src={imgs.postgres} alt="Node.js" />
          <span>Postgres</span>
        </div>
      </div>
    </div>
  )
}

export default FavouriteStack
