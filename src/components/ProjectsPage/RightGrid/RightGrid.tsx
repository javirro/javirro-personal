import { imgs } from "../../../images"
import './RightGrid.css'

const RightGrid = ({ projectInfo }: { projectInfo: any }) => {
  const { longDescription } = projectInfo
  return (
    <div className="right-grid">
      <div className="container">
        <img src={imgs?.screen} alt="front-end" />
        <p>{longDescription.frontend}</p>
      </div>
      <div className="container">
        <img src={imgs?.server} alt="backend" />
        <p>{longDescription.backend}</p>
      </div>
      <div className="container">
        <img src={imgs?.database} alt="database" />
        <p>{longDescription.database}</p>
      </div>
      <div className="container">
        <img src={imgs?.cloud} alt="cloud" />
        <p>{longDescription.deployment}</p>
      </div>
    </div>
  )
}

export default RightGrid
