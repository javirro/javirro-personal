import { FormattedMessage } from "react-intl"
import { imgs } from "../../../images"
import "./LeftGrid.css"

const LeftGrid = ({ projectInfo }: { projectInfo: any }) => {
  const { title, description, github, url, isTeamWork, teamText } = projectInfo
  return (
    <div className="left-grid">
      <div className="container column">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={url} target="blank_" rel="noreferrer">
          <FormattedMessage id="visit-project" />
          <img src={imgs.link} alt="link" />
        </a>
        <a href={github} target="blank_" rel="noreferrer">
          <span><FormattedMessage id="access-github" /></span>
          <img src={imgs.darkGithub} alt="github" />
        </a>
      </div>
      <div className="container reduced-space">
        <img src={isTeamWork ? imgs.team : imgs.person} alt="People" />
        <p>{teamText}</p>
      </div>
    </div>
  )
}

export default LeftGrid
