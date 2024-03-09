import { useState } from "react"
import { WorkExperienceData } from "../../types"
import "./WorkItem.css"
import { imgs } from "../../images"
interface WorkItemProps {
  experience: WorkExperienceData
}
const WorkItem = ({ experience }: WorkItemProps) => {
  const { company, title, startDate, endDate, rol, techStack, fullTime } = experience
  const [showInfo, setShowInfo] = useState<boolean>(false)

  return (
    <article className="work-item">
      <span className="full-time">{fullTime ? "Full-time" : "Partial-time"}</span>
      <div onClick={() => setShowInfo((s: boolean) => !s)}>
        <img src={imgs.downArray} alt="down arrow" className={`down-arrow ${showInfo ? "rotate" : ""}`} />
        <strong>{company}:</strong>
        <strong>{title} </strong>
        <span>
          ({startDate} - {endDate})
        </span>
      </div>
      {showInfo && (
        <div>
          <ul>
            {rol.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          <p>{techStack}</p>
        </div>
      )}
    </article>
  )
}

export default WorkItem
