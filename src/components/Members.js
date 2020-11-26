import React from "react";
import { useQuery } from "@apollo/client";

import { MEMBERS } from "../graphql";
import ProfilePlaceholder from "../assets/profile-placeholder.png";

export default function Members() {
  const { data } = useQuery(MEMBERS);

  const members = data?.members;

  const memberList =
    members &&
    members.map((member) => (
      <div key={member.id} className="member">
        <div className="img-container">
          <img
            src={
              member.image
                ? process.env.REACT_APP_STRAPI_URL + member.image.url
                : ProfilePlaceholder
            }
            alt="member picture"
          />
        </div>
        <div className="details">
          <div className="name">{member.name} </div>
          {member.position && <div className="position">{member.position}</div>}
          {member.email && (
            <div className="contact">
              Contact: <a href={`mailto:${member.email}`}>{member.email}</a>
            </div>
          )}
        </div>
      </div>
    ));
  return (
    <div className="members">
      <h1 className="page-title">Members</h1>
      <div className="members-container">{memberList}</div>
    </div>
  );
}
