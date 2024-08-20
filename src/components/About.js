
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import pfpImg from "../assets/img/profilepic_updated copy.jpeg";
import { Col, Container, Row} from "react-bootstrap"

export const About = () => {

      return (
        <section className="about" id="about">
            <Container>
            </Container>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="about-bx wow zoomIn" >
                            
                            <Container>
                                <Row className="align-items-center">
                                    <Col xs={12} md={8} xl={8} className="pr-5 square">
                                        <h2>About</h2>
                                        <p>Hi, I'm a university student who likes problem-solving. From analyzing companies and industries, to founding my own startup, to running data and statistical analyses,
                                        I love diving into interesting topics and uncovering something about them others might have missed (or just making cool, pretty things). I also have a strong interest
                                        in re-conceptualizing how we use technology to interact with the natural world. Broadly speaking, I want to bridge ecological thinking with innovation. </p>
                                        

                                        <p>This is a nice little spot where I can organize my projects neatly and share them.</p>
                                        
                                        <p>Here are some relevant skillsets that I'm currently focusing on:</p>
                                        <ul>
                                            <li>Data analysis in <b>SQL, Python, and Excel</b></li>
                                            <li>Product management in <b>Azure Dev Ops and Jira</b></li>
                                            <li><b>Equity</b> and <b>blockchain</b> research</li>
                                            <li>Application design in <b>Java</b></li>
                                            <li>Forecasting with <b>probability models</b></li>
                                            <li>Script writing in <b>Python</b></li>
                                            <li>Full stack web dev with <b>MERN</b></li>
                                        </ul>
                                    </Col>
                                    <Col xs={12} md={4} xl={4} >
                                        <img src = {pfpImg} class="img-fluid mx-auto d-block"/>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
      )
      
}