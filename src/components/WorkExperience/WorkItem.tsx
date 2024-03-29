import { useState } from "react"
import { WorkExperienceData } from "../../types"
import TechStack from "./TechStack"
import useScreenWidth from "../../hooks/useScreenWidth"
import { WorkItemHeader, WorkItemHeaderMobile } from "./WorkItemHeader"
import "./WorkItem.css"

interface WorkItemProps {
  experience: WorkExperienceData
}

const WorkItem = ({ experience }: WorkItemProps) => {
  const MOBILE_SIZE: number = 700
  const { rol, techStack, fullTime } = experience
  const [showInfo, setShowInfo] = useState<boolean>(false)
  const screenWidth = useScreenWidth()

  return (
    <article className={showInfo ? "work-item opened" : "work-item"}>
      <span className="full-time">{fullTime ? "Full-time" : "Partial-time"}</span>
      {screenWidth > MOBILE_SIZE ? (
        <WorkItemHeader experience={experience} setShowInfo={setShowInfo} showInfo={showInfo} />
      ) : (
        <WorkItemHeaderMobile experience={experience} setShowInfo={setShowInfo} showInfo={showInfo} />
      )}
      {showInfo && (
        <div className="extra-info">
          <ul>
            {rol.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          {techStack && <TechStack techStack={techStack} />}
        </div>
      )}
    </article>
  )
}

export default WorkItem
