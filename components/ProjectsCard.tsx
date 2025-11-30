import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({ name, desc, github, link }: ProjectType) => {
  return (
    <Col lg="6">
      <Card className="shadow-lg--hover shadow mt-4 h-100" style={{ borderRadius: "0.75rem" }}>
        <CardBody className="d-flex flex-column">
          <div className="mb-3">
            <div className="d-flex align-items-center mb-2">
              <div className="icon icon-shape bg-gradient-primary text-white rounded-circle mr-3">
                <i className="ni ni-laptop" />
              </div>
              <h5 className="mb-0 font-weight-bold">{name}</h5>
            </div>
          </div>
          <p className="description mt-2 flex-grow-1">{desc}</p>
          <div className="mt-3 d-flex gap-2">
            {github ? (
              <Button
                className="btn-icon"
                color="github"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on Github"
              >
                <span className="btn-inner--icon mr-1">
                  <i className="fa fa-github" />
                </span>
                <span className="btn-inner--text">Code</span>
              </Button>
            ) : null}
            {link ? (
              <Button
                className="btn-icon"
                color="primary"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Live Demo"
              >
                <span className="btn-inner--icon mr-1">
                  <i className="fa fa-external-link" />
                </span>
                <span className="btn-inner--text">Live Demo</span>
              </Button>
            ) : null}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectsCard;
