import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/>
          <br/>
          <a target="_blank" href="https://www.youtube.com/" > <button style={{marginRight:"15px"}}>View Demo</button></a>
        
         <a target="_blank" href="https://www.youtube.com/" > <button style={{marginRight:"15px"}}>Github</button></a>
        </div>
      </div>
    </Col>
  )
}
