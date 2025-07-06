import { useState } from "react"
import { imgs } from "../../images"
import "./TechStack.css"

const TechStack = ({ techStack }: { techStack: string[] }) => {
  return (
    <div className="tech-stack">
      {techStack.map((tech: string) => (
        <TechStackItem tech={tech} key={tech} />
      ))}
    </div>
  )
}

const TechStackItem = ({ tech }: { tech: string }) => {
  const [isHovering, setIsHovering] = useState(false)

  const handleHover = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  const imgSrc = imgs[tech.toLowerCase() as keyof typeof imgs]
  return (
    <div className="tech-box">
      <span className={isHovering ? "tech-name" : "tech-name hide"}>{tech}</span>
      <img  src={imgSrc} alt={tech} className="tech-icon" onMouseEnter={handleHover} onMouseOut={handleMouseOut} />
    </div>
  )
}

export default TechStack
