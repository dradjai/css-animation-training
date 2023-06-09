import { Container, Row, Col } from "react-bootstrap";
import "../styles/page2.css"
export default function Page2() {

  const imgRoot = process.env.PUBLIC_URL + "/images/";

  return (
    <section>
      <Container>
        <Row>
          <Col><button class="pg2-button button1">X axis</button></Col>
          <Col><button class="pg2-button button2">Y axis</button></Col>
          <Col><button class="pg2-button button3">Scale</button></Col>
        </Row>

        <Row>
          <Col>
            <div className="profile">
              <img src={imgRoot + "pict.jpg"} alt="profile"/>
              <div className="profile-text">
                <h3>Back in Time</h3>
                <a href="#" className="profile-button" rel="noreferrer">Buy Now!</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}