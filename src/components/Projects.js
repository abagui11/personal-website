
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Col, Container, Row} from "react-bootstrap"
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";


export const Projects = () => {
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
    <section className="project" id="projects">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="job-bx wow zoomIn">
                        <h2>Apps and Scripts</h2>
                        <p id = "number_count">4 total</p>
    
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">

                                <div class="panel">
                                    <h5 class="panel-title">VO2 - Athlete NFT Platform</h5>
                                    <div class="panel-content">
                                        <p>A social platform for athletes to sell NFTs to fans and interact with them more directly. I wore many hats, including product manager and developer. </p>
                                    </div>
                                </div>

                            </div>
                            <div className="item">
                                
                                <div class="panel">
                                    <h5 class="panel-title">Crypto Trading Algorithm</h5>
                                    <div class="panel-content">
                                        <p>A trading algorithm that makes buys and sells on various crypto coins based on standard deviation movements of social media movement. Sole developer.</p>
                                    </div>
                                </div>

                            </div>
                            <div className="item">
                                
                                <div class="panel">
                                    <h5 class="panel-title">Cowboy Samurai</h5>
                                    <div class="panel-content">
                                        <p>A game where you play as a Cowboy Samurai and fight crabs. Made entirely using Java inspired by Kaarin Gaming. Sole developer.</p>
                                    </div>
                                </div>

                            </div>
                            <div className="item">
                                
                                <div class="panel">
                                    <h5 class="panel-title">Email Crawler</h5>
                                    <div class="panel-content">
                                        <p>Email crawler that sorts through website and picks up emails from them and automatically sends them an email. Sole developer.</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="item">
                                
                                <div class="panel">
                                    <h5 class="panel-title">PennPals</h5>
                                    <div class="panel-content">
                                        <p>A messaging platform that allows to users to connect to a server and chat with each other privately, or in group chats. Sole developer, class project.</p>
                                    </div>
                                </div>
                            </div> 
                            
                        </Carousel>
                        <br/>
                        <br/>
                        <br/>
                        <h2>Data Analysis</h2>
                        <p id = "number_count">3 total</p>
                        
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                
                                <div class="panel">
                                    <h5 class="panel-title">Crypto Report Generator</h5>
                                    <div class="panel-content">
                                        <p>A Python script that automatically generates up to date data reports for the inputted crypto token as well as providing buy and sell recommendations.</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="item">
                                
                                <div class="panel">
                                    <h5 class="panel-title">NBA Performance vs Country of Origin</h5>
                                    <div class="panel-content">
                                        <p>A statistical analysis that analyzed the country of origin of various NBA players active in the league and their performance across multiple NBA performance metrics.</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="item">
                                
                                <div class="panel">
                                    <h5 class="panel-title">Predicting Price through Social Media</h5>
                                    <div class="panel-content">
                                        <p>A statistical report that analyze the correlation between various social medias and sentiment towards token price. No significant correlation was found.</p>
                                    </div>
                                </div>
                            </div> 
                        </Carousel>
                        <br/>
                        <br/>
                        <br/>
                        <h2>Research Reports</h2>
                        <p id = "number_count">2 total</p>
                        
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                
                                <div class="panel">
                                    <h5 class="panel-title">Netflix Bear Thesis, 1/15/22</h5>
                                    <div class="panel-content">
                                        <p>A bear thesis on Netflix that predicts a decline in pricing power caused by streaming service competition.</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="item">
                                
                                <div class="panel">
                                    <h5 class="panel-title">Debt Tokenization Landscape, 2/1/23</h5>
                                    <div class="panel-content">
                                        <p>A research report on the debt tokenization landscape, the transition from real world debt on-chain and the capital debt issuance for on-chain entities.</p>
                                    </div>
                                </div>
                            </div> 
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}