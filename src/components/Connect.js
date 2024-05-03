import { Container, Col, Row } from "react-bootstrap";
import { SkillIconsLinkedin } from '../img/logo/SkillIconsLinkedin';
import { BiGithub } from '../img/logo/BiGithub';

export const Connect = () => {
  const iconStyle = {
    fontSize: '3rem',
    margin: '20px',
  };

  return (
    <section className="connect" id="connect">
      <Container>
        <Row>
          <Col>
            <div className="connect-bx">
              <h1>Let's Connect! </h1>
              
              <Row noGutters>
                <Col>
                  <a href="https://www.linkedin.com/in/nur-athirah-bte-mohd-noor-9a6670206/"><SkillIconsLinkedin style={iconStyle}/></a>
                  <p>My Linked In</p>
                </Col>
                <Col>
                  <a href="https://github.com/haileyavery"><BiGithub style={iconStyle}/></a>
                  <p>My Github</p>
                </Col>
              </Row>

              <p>OR...</p>
              <p>You can email me at:</p>
              <p>athirahmn.2022@scis.smu.edu.sg (school)</p>
              <p>nurathirahbtemohdnoor@gmail.com  (personal)</p>
            </div>
          </Col>
        </Row>
      </Container> 
    </section>
  );
};