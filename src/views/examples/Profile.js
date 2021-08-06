/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Card, CardBody, Container, Row, Col } from "reactstrap";

// core components
import ill2 from "assets/img/ill/ill-2.svg";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import profile from "assets/img/theme/myPic.jpg";
import reactWhite from "assets/img/brand/Renad.png";
class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-4 shape-default alpha-4" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1615578843118-d3f321b541e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2052&q=80)', backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={profile}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Connect
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Message
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">20</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">3</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">0</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5 " style={{ paddingBottom: '15px' }}>
                    <h3>
                      Renad Al-Khlafat{" "}
                      <span className="font-weight-light">, 23</span>
                    </h3>
                    <h3>
                      {' <Renad/>'}{" "}
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Tafila, Jordan
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Software Developer Student
                    </div>
                    <div>
                      <i className="ni education_hat mr-2 " />
                      ASAC - LTUC
                    </div>
                  </div>

                </div>
              </Card>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-info">
            <Container fluid>
              <Row >
               
               
                </Row>
                <Row>
                  <Col>
                  <Card className="shadow shadow-lg--hover mt-5 mb-6" >
                  <CardBody>
                    <div className=" px-3">
                      <div>
                      <h4 className="display-1 text-black">About Me </h4>
                    <p className=" text-black">
                      Am a CIS graduate, I entered this field in my quest to always be distinguished and not to be like anyone in my thinking and this is what I found in the world of programming ,my first experience in programming was at Tawjihi level , I created a simple website for a fake travel and tourism company, I would like to pass on my experience to those interested in programming specially girls, I volunteered different organization that interested to teach programming languages .
                    </p>
                        
                      </div>
                      <div className="pl-4">
                      
                        <h5 className="title text-info">
                          My Skills
                        </h5>
                        <p>
                          <ul>
                            <li> C++</li>
                            <li> JavaScript</li>
                            <li> Html5</li>
                            <li> CSS</li>
                            <li> ReactJs</li>
                            <li> Bootstrap</li>
                          </ul>
                        </p>
                        <Button
                          className="info text-info"
                          href="https://drive.google.com/file/d/1EsFmwUmbLoACgqoD3dQVFzAw7bVHRLUg/view?usp=sharing"
                          target="_blank"
                        >
                          Resume
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card> </Col>
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={ill2}
                    />
                  </div>
                </Col>
                  </Row>  
                
             
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
