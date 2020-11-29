import React from "react";
import { useQuery } from "@apollo/client";
import Skeleton from "react-loading-skeleton";

import { MEMBERS } from "../graphql";
import ProfilePlaceholder from "../assets/profile-placeholder.png";

export default function Members() {
  const { data, loading, error } = useQuery(MEMBERS);

  const members = data?.members;

  const memberList = loading
    ? new Array(3).fill(
        <div className="member">
          <div className="img-container">
            <img src={ProfilePlaceholder} alt="member picture" />
          </div>
          <div className="details">
            <div className="name">
              <Skeleton />{" "}
            </div>
            <div className="position">
              <Skeleton />
            </div>

            <div className="contact">
              <Skeleton />
            </div>
          </div>
        </div>
      )
    : members &&
      members.map((member) => (
        <div key={member.id} className="member">
          <div className="img-container">
            <img
              src={member.image ? member.image.url : ProfilePlaceholder}
              alt="member picture"
            />
          </div>
          <div className="details">
            <div className="name">{member.name} </div>
            {member.position && (
              <div className="position">{member.position}</div>
            )}
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
      <div className="members-container">
        {!loading && Array.isArray(memberList) && memberList.length === 0 ? (
          <div>No members are listed, please check back later.</div>
        ) : (
          memberList
        )}
        {error && <div>Something went wrong: {error}</div>}
      </div>
    </div>
  );
}
