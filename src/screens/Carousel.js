import Carousel from 'react-bootstrap/Carousel';
import img1 from "./img/anticonceptivos.jpg";
import img2 from "./img/exploracion.jpg";
import img3 from "./img/gine.png";
import './Home.css';

function UncontrolledExample() {
    return (
     <div>
        <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-50 carouserlIMG"
                src={img1}
                alt="First slide"
            />
            <Carousel.Caption>
          
           
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-50" src={img2} alt="Second Slide"/>
            <Carousel.Caption>
          
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-50"
                src={img3}
                alt="Third slide"
            />
            <Carousel.Caption>
          
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
     </div>
    );
  }
  
  export default UncontrolledExample;
