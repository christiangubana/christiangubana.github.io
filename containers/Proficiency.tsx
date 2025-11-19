import React from "react";
import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import GreetingLottie from "../components/DisplayLottie";

const Proficiency = () => {
  return (
    SkillBars && (
      <Container className="section section-lg">
        <Fade bottom duration={2000}>
          <Row className="align-items-center">
            <Col lg="6" className="mb-5 mb-lg-0">
              <h1 className="h1 mb-4">Technical Proficiency</h1>
              <p className="lead text-muted mb-5">
                Skills refined through hands-on experience building production-ready applications
              </p>
              {SkillBars.map(skill => {
                return (
                  <div className="progress-info mb-4" key={skill.Stack}>
                    <div className="progress-label d-flex justify-content-between mb-2">
                      <span className="font-weight-600">{skill.Stack}</span>
                      <span className="text-info font-weight-bold">{skill.progressPercentage}%</span>
                    </div>
                    <Progress
                      max="100"
                      value={skill.progressPercentage}
                      color="info"
                      role="progressbar"
                      aria-label={skill.Stack}
                      style={{ height: "10px", borderRadius: "10px" }}
                    />
                  </div>
                );
              })}
            </Col>
            <Col lg="6">
              <GreetingLottie animationPath="/lottie/build.json" />
            </Col>
          </Row>
        </Fade>
      </Container>
    )
  );
};

export default Proficiency;
