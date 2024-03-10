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
  const imgSrc = imgs[tech.toLowerCase() as keyof typeof imgs]
  return <img src={imgSrc} alt={tech} className="tech-icon" />
}

export default TechStack
