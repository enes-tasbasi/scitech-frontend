import React from "react";
import Slider from "react-slick";
import { useQuery } from "@apollo/client";
import ReactMarkdown from "react-markdown";
import Skeleton from "react-loading-skeleton";

import { PROJECTS } from "../graphql";

export default function Projects() {
  const { data, loading, error } = useQuery(PROJECTS);

  const projects = data?.projects || [];

  const projectList = projects.map((project) => (
    <div className="project" key={project.id}>
      <h3>{project.title}</h3>
      <div className="project-body">
        {project.images && project.images.length > 0 && (
          <ProjectSlider images={project.images} />
        )}
        <div className="description">
          <ReactMarkdown source={project.description} />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="projects">
      <h1 className="page-title">Projects</h1>
      {loading && (
        <div className="project">
          <Skeleton width={200} />
          <div style={{ marginTop: "40px" }}></div>
          <Skeleton count={5} />
        </div>
      )}
      {!loading && !error && projectList.length === 0 ? (
        <div>No projects are listed currently, please check back later.</div>
      ) : (
        projectList
      )}
      {error && <div>An error occurred.</div>}
    </div>
  );
}

function ProjectSlider({ images }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images &&
          images.map((image) => (
            <div key={image.id} className="img-container">
              <img
                src={process.env.REACT_APP_STRAPI_URL + image.url}
                alt="project image"
              />
            </div>
          ))}
      </Slider>
    </div>
  );
}
