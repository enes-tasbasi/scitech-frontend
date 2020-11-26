import React from "react";
import { useQuery } from "@apollo/client";
import ReactMarkdown from "react-markdown";
import Slider from "react-slick";
import { ABOUT_US, ABOUT_US_IMAGES } from "../graphql";

export default function AboutUs() {
  const { data } = useQuery(ABOUT_US);

  return (
    <div className="about-us">
      <ImageSlider />
      <h1 className="page-title">About Us</h1>
      <ReactMarkdown source={data?.aboutUs?.Content} />
    </div>
  );
}

function ImageSlider() {
  const { data } = useQuery(ABOUT_US_IMAGES);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    variableWidth: true,
  };

  const images = data?.aboutUsImage?.images;
  return (
    <Slider {...settings}>
      {images &&
        images.map((image) => (
          <div className="img-container" key={image.id}>
            <img src={process.env.REACT_APP_STRAPI_URL + image.url}></img>
          </div>
        ))}
    </Slider>
  );
}
