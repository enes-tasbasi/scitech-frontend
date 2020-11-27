import React from "react";
import { useQuery } from "@apollo/client";
import ReactMarkdown from "react-markdown";

import { CONTACT } from "../graphql";
import Skeleton from "react-loading-skeleton";

export default function ContactUs() {
  const { data, loading } = useQuery(CONTACT);

  const content = data?.contact?.content;

  return (
    <div>
      <h1 className="page-title">Contact Us</h1>
      {loading ? <Skeleton count={5} /> : <ReactMarkdown source={content} />}
      {!loading && !content && (
        <div>No contact info is present, please check back later.</div>
      )}
    </div>
  );
}
