import workData from "../../data/workExperience.json"
import { WorkExperienceData } from "../../types"
import WorkItem from "./WorkItem"
import { FormattedMessage } from "react-intl"

import "./WorkExperience.css"


const WorkExperience = () => {
  const workExperience: WorkExperienceData[] = workData
  return (
    <section id="work-exp">
      <h2><FormattedMessage id="work-experience" /></h2>
      <section className="work-items-container">
        {workExperience.map((work: WorkExperienceData, i: number) => <WorkItem key={work.startDate} experience={work} />)}
      </section>
    </section>
  )
}

export default WorkExperience
