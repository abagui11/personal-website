
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Jobs = () => {
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
    <section className="job" id="jobs">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="job-bx wow zoomIn">
                        <h2>Jobs</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}