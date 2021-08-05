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
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import part_hunt from "assets/img/theme/201-project(partHunt).png";
import horned_beasts from "assets/img/theme/horned-beasts.png";
import bus_mall from "assets/img/theme/Bus-mall.png";
import cookie_stand from "assets/img/theme/cookie-stand.png";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <p className="lead text-white">
                        " Each person has his own world in the field of programming and each person has a unique way of thinking and implementation, and I always strive to excel in my work and this is what encouraged me to enter the field of programming"
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
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
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0 mb-3">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-info text-uppercase">
                            Bus Mall
                          </h6>
                          <p className="description mt-3">
                            An applicatio do market analysis on proposed products to test their potential customer interest… before actually putting them into the catalog and getting the manufacturing wheels in motion.
                          </p>
                          <div>
                            <Badge color="info" pill className="mr-1">
                              Html5
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              JavaScript
                            </Badge>
                          </div>
                          <Button outline
                            className="mt-4"
                            color="info"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Take A look

                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0 mb-3">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-info text-uppercase">
                            Horned Beasts
                          </h6>
                          <p className="description mt-3">
                            An application that displays images and information of horned animals. This application allow you to filter the images by number of horns ,view specific images
                            When you enters a character into the search field and chose your favorite image.
                          </p>
                          <div>
                            <Badge color="info" pill className="mr-1">
                              ReactJs
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              React Bootstrap
                            </Badge>

                          </div>
                          <Button outline
                            className="mt-4"
                            color="info"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Take A look

                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-info text-uppercase">
                            Cookie Stand
                          </h6>
                          <p className="description mt-3">
                            An application that calculates the number of cookies each location must make every day and the daily sales projections for each location that there is a cookie stand cafe
                          </p>
                          <div>
                            <Badge color="info" pill className="mr-1">
                              Html5
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              JavaScript
                            </Badge>
                          </div>
                          <Button outline
                            className="mt-4"
                            color="info"
                            href="#"
                            onClick={e => e.preventDefault()}
                          >
                            Take A look
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-info text-uppercase">
                            PartHunt
                          </h6>
                          <p className="description mt-3">
                            A website that illustrates the process of picking a suitable Part-time job that a company posted.
                          </p>
                          <div>
                            <Badge color="info" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              JavaScript
                            </Badge>
                          </div>
                          <Button outline
                            className="mt-4"
                            color="info"
                            href="https://vteam-201.github.io/PartHunt/"
                            onClick={e => e.preventDefault()}
                          >
                            Take A look
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-info text-uppercase">
                            301 Project
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="info" pill className="mr-1">
                              ReactJs
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              Bootstrap
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              MongoDB
                            </Badge>
                          </div>
                          <Button outline
                            className="mt-4"
                            color="info"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Take A look
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-info text-uppercase">
                            401 Project
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="info" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              launch
                            </Badge>
                          </div>
                          <Button outline
                            className="mt-4"
                            color="info"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Take A look
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={part_hunt}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                       PartHunt <small>201 project</small>
                      </h4>
                      <p className="lead text-italic text-white">
                       
                      </p>
                    </blockquote>
                  </Card>
                  </Col>
                  <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={horned_beasts}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Horned Beasts
                      </h4>
                      <p className="lead text-italic text-white">
                        The first project in 301 course  
                      </p>
                    </blockquote>
                  </Card>
                  </Col>
              </Row>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={bus_mall}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                      Bus Mall
                      </h4>
                      <p className="lead text-italic text-white">
                       
                      </p>
                    </blockquote>
                  </Card>
                  </Col>
                  <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={cookie_stand}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Cookie Stand
                      </h4>
                      <p className="lead text-italic text-white">
                      
                      </p>
                    </blockquote>
                  </Card>
                  </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
