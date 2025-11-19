import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ExperienceType } from "../types/sections";

const ExperienceCard = ({ companyLogo, company, role, date, desc, descBullets }: ExperienceType) => {
  return (
    <Col lg="6">
      <Card
        style={{ flex: 1, borderRadius: "0.75rem" }}
        className="shadow-lg--hover my-4 shadow border-0 text-center h-100"
      >
        <CardBody className="d-flex flex-column">
          <img
            src={companyLogo}
            style={{
              objectFit: "cover",
              marginLeft: "auto",
              marginRight: "auto",
              width: "8rem",
              height: "8rem",
              borderRadius: "50%",
              border: "4px solid #f7f8fc",
            }}
            className="shadow-sm mb-4"
            alt={company || role}
          />
          <CardSubtitle tag="h4" className="mb-2 font-weight-bold text-dark">
            {role}
          </CardSubtitle>
          <CardSubtitle className="mb-3 text-muted">
            <i className="fa fa-calendar mr-2" />
            {date}
          </CardSubtitle>
          <CardText tag="div" className="description my-3 text-left flex-grow-1">
            <p className="text-dark mb-3">{desc}</p>
            {descBullets && descBullets.length > 0 && (
              <ul className="text-left pl-4">
                {descBullets.map((bullet, index) => {
                  return (
                    <li key={index} className="mb-2">
                      {bullet}
                    </li>
                  );
                })}
              </ul>
            )}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExperienceCard;
