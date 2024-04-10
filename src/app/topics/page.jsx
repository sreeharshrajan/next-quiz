"use client";
import React, { useState } from "react";

import Header from "@/components/layout/Header";
import TopicCloud from "@/components/TopicCloud";

function Page() {
  const categories = [
    { label: "General Knowledge", value: "generalKnowledge" },
    { label: "Science", value: "science" },
    { label: "Technology", value: "technology" },
    { label: "History", value: "history" },
    { label: "Geography", value: "geography" },
  ];

  return (
    <div>
      <Header />
      <TopicCloud options={categories} />
    </div>
  );
}

export default Page;
