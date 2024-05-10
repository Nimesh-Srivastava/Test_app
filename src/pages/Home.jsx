import {React, useState} from 'react'
import { Container, Row, Col } from 'reactstrap'

import "../styles/home.css"
import mainImg from "../assets/images/hero-img.png"

const Home = () => {

  const images = [
    "src/assets/images/arm-chair-01.png",
    "src/assets/images/arm-chair-02.png",
    "src/assets/images/arm-chair-03.png",
];

const [selected, setSelected] = useState(0);

    function selectImage(index) {
        if (index < images.length) {
            setSelected(index);
        }
    }

  return (
    <section className="main">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="main_content">
              <h2>FOR ALL YOUR FURNITURE NEEDS</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quidem magnam itaque nobis minima! Autem officiis et, delectus itaque eum, debitis accusantium, ad at doloremque omnis illo maxime aut enim.</p>
            </div>
            <div className="btns">
                <button className="btn_class_a">Contact Us</button>
                <button className="btn_class_b">About Us</button>
              </div>
          </Col>
          <Col lg="6" md="6">
            {/* <img src={ images[selected] } className='selected' alt="" /> */}
            <img src={mainImg} alt="" />
          </Col>
        </Row>
      </Container>
      {/* <div className="dot-container">
        { images.map((_, index) => {
            return <div className={`dot ${index === selected ? 'selected': ''}`} key={index} onClick={() => selectImage(index)}></div>
        }) }
        </div> */}
    </section>
  )
}

export default Home