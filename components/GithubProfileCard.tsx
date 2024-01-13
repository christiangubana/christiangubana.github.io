import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { GithubUserType } from "../types";
import SocialLinks from "./SocialLinks";

const GithubProfileCard = ({ avatar_url }: GithubUserType) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white fw-bold">Reach Out to me!</h2>
              <p className="text-white">Discuss a project or just want to say hi? my inbox is open for all</p>
            </Col>
            <Col className="order-lg-2" lg="4">
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
