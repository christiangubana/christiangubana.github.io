import React from "react";
import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    projects && (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 2 }}
      >
        <section id="projects" className="section section-lg">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-laptop text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info">Featured Projects</h4>
                <p className="lead text-muted">Showcasing impactful solutions and technical expertise</p>
              </div>
            </div>
            <Row className="row-grid align-items-center">
              {projects.map((data, i) => {
                return <ProjectsCard key={i} {...data} />;
              })}
            </Row>
          </Container>
        </section>
      </motion.div>
    )
  );
};

export default Projects;
