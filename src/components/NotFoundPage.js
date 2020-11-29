import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <FontAwesomeIcon icon={faSadTear} />
      <div>This link is broken : (</div>
      <a href="/">Head back to the home page</a>
    </div>
  );
}
