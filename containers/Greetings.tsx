import React, { useEffect } from "react";
import { greetings } from "../portfolio";
import { Button, Container, Row, Col } from "reactstrap";
import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";
import GithubProfileCard from "../components/GithubProfileCard";

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shape pb-250">
          <div className="shape shape-style-1 bg-gradient-info">
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
              <Row className="align-items-center">
                <Col lg="8" md="12" className="mb-5 mb-lg-0">
                  <h1 className="display-3 text-white font-weight-bold mb-4">{greetings.title}</h1>
                  <p className="lead text-white mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                    {greetings.description}
                  </p>
                  <div className="mb-4">
                    <SocialLinks />
                  </div>
                  {greetings.resumeLink && (
                    <div className="btn-wrapper">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        size="lg"
                        href={greetings.resumeLink}
                        target="_blank"
                        disabled
                      >
                        <span className="btn-inner--icon mr-2">
                          <i className="fa fa-file-pdf-o" />
                        </span>
                        <span className="btn-inner--text">Download Resume</span>
                      </Button>
                      <Button className="btn-icon mb-3 mb-sm-0 ml-1" color="white" size="lg" href="#projects" outline>
                        <span className="btn-inner--icon mr-2">
                          <i className="fa fa-code" />
                        </span>
                        <span className="btn-inner--text">View Projects</span>
                      </Button>
                    </div>
                  )}
                </Col>
                <Col lg="4" md="12" className="text-center">
                  <img
                    src={"https://avatars.githubusercontent.com/u/101836990?v=4"}
                    style={{
                      width: "280px",
                      height: "280px",
                      objectFit: "cover",
                      border: "5px solid rgba(255,255,255,0.2)",
                    }}
                    alt="Christian Ngubana"
                    className="rounded-circle img-center img-fluid shadow-lg mb-4"
                  />
                  <div className="text-white mt-3">
                    <h5 className="text-white font-weight-bold">Open to Remote Work</h5>
                    <p className="text-white-50">Available for Exciting Opportunities</p>
                  </div>
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
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Greetings;
