import { useParams } from "react-router-dom"
import projects from "../../data/personalProjects.json"
import { ProjectData } from "../../types"
import LeftGrid from "../../components/ProjectsPage/LeftGrid/LeftGrid"
import RightGrid from "../../components/ProjectsPage/RightGrid/RightGrid"

import "./Projects.css"


const Projects = () => {
  const { name } = useParams<{ name: string }>()
  const projectInfo = projects?.find(project => project.title.toLowerCase().replace(" ", "-") === name?.toLowerCase()) as ProjectData
  return (
    <div className="project-main">
      <section className="bento-grid">
        <LeftGrid projectInfo={projectInfo} />
        <RightGrid projectInfo={projectInfo} />
      </section>
    </div>
  )
}

export default Projects
