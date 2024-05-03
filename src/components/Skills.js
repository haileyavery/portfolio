import {Container, Col, Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter_80 from "../img/meter_80.png";
import meter_75 from "../img/meter_75.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className= "skill-bx">
                    <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <h2>
                            Skills
                        </h2>
                        <p>Here are my skills!</p>
                        </div>}
                    </TrackVisibility>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter_80} alt="Image" />  
                                    <h5>Web development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter_75} alt="Image" />  
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={meter_80} alt="Image" />  
                                    <h5>HTML/CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter_75} alt="Image" />  
                                    <h5>Javascript</h5>
                                </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}