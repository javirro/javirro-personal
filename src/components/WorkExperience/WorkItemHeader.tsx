import { imgs } from "../../images"
import { WorkExperienceData } from "../../types"
import "./WorkItemHeader.css"

interface WorkItemHeaderProps {
  experience: WorkExperienceData
  showInfo: boolean
  setShowInfo: any
}

export const WorkItemHeader = ({ experience, showInfo, setShowInfo }: WorkItemHeaderProps) => {
  const { company, title, startDate, endDate } = experience
  return (
    <div onClick={() => setShowInfo((s: boolean) => !s)}>
      <img src={imgs.downArray} alt="down arrow" className={`${showInfo ? "rotate" : ""}`} />
      <strong>{company}:</strong>
      <strong>{title} </strong>
      <span>
        ({startDate} - {endDate})
      </span>
    </div>
  )
}

export const WorkItemHeaderMobile = ({ experience, showInfo, setShowInfo }: WorkItemHeaderProps) => {
  const { company, title, startDate, endDate } = experience
  return (
    <div onClick={() => setShowInfo((s: boolean) => !s)}>
      <div className="company">
        <img src={imgs.downArray} alt="down arrow" className={`${showInfo ? "rotate" : ""}`} />
        <strong>{company}</strong>
      </div>
      <strong>{title} </strong>
      <span>({startDate} - {endDate})</span>
    </div>
  )
}
