import colorSharp2 from "../img/color-sharp2.png"
import { ProjectCard } from "./ProjectCard";
import {Col, Container, Tab, Row, Nav} from "react-bootstrap";
import projImg1 from "../img/PROJiMG1.jpg";
import projImg2 from "../img/projimg2.png";
import projImg3 from "../img/projimg3.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";



export const Projects = () => {
    //list of projects -> list contains: title, category, image
    const projects = [
        {
            title: "Where Makan website",
            category: "Design & Web development \n",
            imgUrl: projImg1,
            description: "Where Makan is your go-to online guide for discovering the vibrant world of hawker centres in Singapore. Our user-friendly website combines cutting-edge technology with a passion for local cuisine, allowing you to effortlessly find the nearest hawker centre at your fingertips. With integrated geolocation services, intuitive search functionality, and a comprehensive database of hawker centres, we provide real-time information on locations, operating hours, and diverse culinary offerings. ",
            languages: "Vue.js, Javascript, Bootstrap, CSS3"
        },
        {
            title: "Snake Game",
            category: "Game development \n",
            imgUrl: projImg2,
            description: "Embark on a nostalgic journey with the classic Snake Game project. This retro-inspired game offers a modern twist on the timeless favorite. Control your serpent as it slithers through the digital world, consuming apples to grow longer. The challenge intensifies with each bite, testing your reflexes and strategic thinking. Immerse yourself in the captivating gameplay and relive the joy of a gaming classic.",
            languages: "Java, Java GUI"
        },
        {
            title: "Weather App",
            category: "Design & software development \n",
            imgUrl: projImg3,
            description: "Stay ahead of the forecast with the Weather App project. Seamlessly blending functionality with an elegant user interface, this app provides real-time weather updates at your fingertips. From current conditions to extended forecasts, empower users to make informed decisions about their day based on accurate and visually appealing weather data.",
            languages: "React, CSS3"
        },
    ];
    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <h2>Projects</h2>
                        <p>THESE MY PROJECTSSS</p>
                        </div>}
                    </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Hawker Heaven</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Snake Game</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Weather App</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content id="slideInUp" >
                            <Tab.Pane eventKey="first">
                                <ProjectCard {...projects[0]} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <ProjectCard {...projects[1]} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <ProjectCard {...projects[2]} />
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}