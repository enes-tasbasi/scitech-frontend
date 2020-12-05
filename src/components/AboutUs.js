import React from "react";
import { useQuery } from "@apollo/client";
import ReactMarkdown from "react-markdown";
import Slider from "react-slick";
import Skeleton from "react-loading-skeleton";

import { ABOUT_US } from "../graphql";

export default function AboutUs() {
  const { data, loading } = useQuery(ABOUT_US);

  return (
    <div className="about-us">
      <ImageSlider images={data?.aboutUs?.images} />
      <h1 className="page-title">About Us</h1>
      {loading ? (
        <Skeleton count={5} />
      ) : (
        <ReactMarkdown source={data?.aboutUs?.Content} />
      )}
      {!loading && !data?.aboutUs?.Content && (
        <div>Nothing here, please check back later.</div>
      )}
    </div>
  );
}

function ImageSlider({ images }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    variableWidth: true,
  };

  return (
    <Slider {...settings}>
      {images &&
        images.map((image) => (
          <div className="img-container" key={image.id}>
            <img src={image.url} />
          </div>
        ))}
    </Slider>
  );
}
