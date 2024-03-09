import { WorkExperienceData } from "../../types"
import "./WorkItem.css"
interface WorkItemProps {
  experience: WorkExperienceData
}
const WorkItem = ({ experience }: WorkItemProps) => {
  const { company, title, startDate, endDate, description, rol, techStack } = experience
  return <article className="work-item">
    <h4><span>{company}</span> {title} <strong> ({startDate} - {endDate})</strong></h4>
    <div>
    <p>{description}</p>
    <ul>
      {rol.map((r, i) => <li key={i}>{r}</li>)}
    </ul>
    <p>{techStack}</p>
    </div>
  
  </article>
}

export default WorkItem
