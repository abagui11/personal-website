
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import pfpImg from "../assets/img/pfp_usual.jpg";

export const About = () => {

      return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>About</h2>

                            <img style={{ width: 200, height: 200 }} src = {pfpImg} />
                            <p>Hey! I'm a college student who likes problem-solving, analyzing companies and industries, and building things. </p>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
      )
      
}