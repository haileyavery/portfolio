import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../img/Headshot_web.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    //words for typing animation
    const toRotate = ["Web Developer", "Software Engineer", "UI/UX Designer"];
    const [text, setText] = useState('');
    //determine how fast one letter comes out after one letter has typed
    const [delta, setDelta] = useState(100 - Math.random() * 10);
    const period = 800;

    useEffect(() =>{
        let ticker = setInterval(()=> {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    //tick
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


    return(
        <section className="banner" id ="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline">Welcome to my web portfolio</span>
                        <h1>{'Hi I\'m Athirah!'}</h1>
                        <h1 className="wrap">Aspiring {text}</h1>
                        <p>Dedicated young professional with a passion for learning and development. 
                            Eager to leverage education and training in the Software Engineering space to support the growth and success of a high-performing organization. 
                            Seeking to utilize this internship opportunity to gain hands-on experience and make meaningful contributions to innovative projects.
                        </p>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src ={headerImg} alt ="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}