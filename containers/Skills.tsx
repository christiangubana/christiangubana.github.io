import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";

const Skills = () => {
  // Helper function to create a valid HTML ID from skill name
  const createSkillId = (skillName: string): string => {
    return skillName
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  };

  return (
    skillsSection && (
      <Fade bottom duration={2000}>
        <Container className="text-center my-5 section section-lg">
          <h1 className="h1 mb-3">{skillsSection.title}</h1>
          <p className="lead text-muted mb-5" style={{ maxWidth: "800px", margin: "0 auto" }}>
            {skillsSection.subTitle}
          </p>
          {skillsSection.data.map((section, index) => {
            return (
              <Row className="my-5" key={index}>
                <Col lg="6" className="order-2 order-lg-1">
                  <DisplayLottie animationPath={section.lottieAnimationFile} />
                </Col>
                <Col lg="6" className="order-1 order-lg-2">
                  <h3 className="h3 mb-2">{section.title}</h3>
                  <div className="d-flex justify-content-center flex-wrap mb-2">
                    {section.softwareSkills.map((skill, i) => {
                      const skillId = createSkillId(skill.skillName);
                      return (
                        <Fragment key={i}>
                          <div className="icon icon-lg icon-shape shadow-sm rounded-circle m-1 bg-white" id={skillId}>
                            <Icon icon={skill.iconifyTag} data-inline="false"></Icon>
                          </div>
                          <UncontrolledTooltip delay={0} placement="bottom" target={skillId}>
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </Fragment>
                      );
                    })}
                  </div>
                  <div>
                    {section.skills.map((skill, i) => {
                      return <p key={i}>{skill}</p>;
                    })}
                  </div>
                </Col>
              </Row>
            );
          })}
        </Container>
      </Fade>
    )
  );
};

export default Skills;
