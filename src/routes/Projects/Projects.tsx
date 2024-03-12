import { useParams } from "react-router-dom"

const Projects = () => {
  const { name } = useParams<{ name: string }>()
  return <div className="project-main">
     
  </div>
}

export default Projects
