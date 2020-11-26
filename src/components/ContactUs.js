import React from "react";
import { useQuery } from "@apollo/client";
import ReactMarkdown from "react-markdown";

import { CONTACT } from "../graphql";

export default function ContactUs() {
  const { data } = useQuery(CONTACT);

  const content = data?.contact?.content;

  return (
    <div>
      <h1 className="page-title">Contact Us</h1>
      <ReactMarkdown source={content} />
    </div>
  );
}
