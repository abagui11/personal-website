import { useState, useEffect } from "react";
import { Col, Container, Row} from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import Spline from '@splinetool/react-spline';
import splinegif from '../assets/img/personal-website-spline.gif'







export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Data Analyst", "Product Developer", "Investor"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() =>{
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
    
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(250);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
            
                <Row className="align-items-center">
                    

                    <Col xs={12} md={6} xl={6}>
                        <img id="mobile-only" src={splinegif} alt="graphic"/>
                        <h1>{'Hi I\'m Arpan Bagui:'}</h1>
                        <h2>{'- '}<span className="wrap">{text}</span></h2>
                        <p>I'm a student at Penn studying Statistics and Computer Science. My interests range from blockchain, to consumer tech, to markets. Pleasure to meet!</p>
                        <a href="mailto:bagui.arpan@gmail.com"><button> Let's connect <ArrowRightCircle size={25} /></button></a>
                    </Col>

                    <Col xs={12} md={6}  className="pt- -200" id="desktop-only">
                            
                            <Spline scene="https://prod.spline.design/C2cKZkCLDUQbgzcU/scene.splinecode" />
                    
                    </Col>
                    
                    

                </Row>
            </Container>
        </section>
    )
}