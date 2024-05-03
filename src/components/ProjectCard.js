import { Col, Row } from 'react-bootstrap';

export const ProjectCard = ({ title, category, imgUrl, description, languages }) => {
  return (
    <div>
      <Row>
        <Col sm={6} md={6}>
          <div className="proj-imgbx">
            <img src={imgUrl} alt={title} />
          </div>
        </Col>
        <Col sm={6} md={6}>
          <div className="proj-txtx">
            <h3>{title}</h3>
            <h5>{category}</h5>
            <Row>
              <p>{description}</p>
            </Row>
            <Row>
              <p>Languages used: {languages}</p>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};