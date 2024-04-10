"use client";
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import TopicCloud from "@/components/TopicCloud";

function Page() {
  const [selectedOption, setSelectedOption] = useState(null);

  const categories = [
    { label: "General Knowledge", value: "generalKnowledge" },
    { label: "Science", value: "science" },
    { label: "Technology", value: "technology" },
    { label: "History", value: "history" },
    { label: "Geography", value: "geography" },
  ];

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const selectedLabel = categories.find(
    (option) => option.value === selectedOption
  )?.label;

  return (
    <>
      <Header />
      <main className="bg-white ">
        <div class="mx-auto py-16 sm:px-6 lg:px-8">
          <div class="relative isolate overflow-hidden px-6 py-24 text-center sm:rounded-3xl sm:px-16">
            <h2 class="font-nudge-extrabold mx-auto max-w-2xl text-2xl font-bold  tracking-wide sm:text-4xl">
              Let&apos;s Begin Your Quiz!
            </h2>
            <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Test your knowledge and expand your mind. <br /> Select a category
              below to begin.
            </p>

            <TopicCloud
              options={categories}
              selectedOption={selectedOption}
              onChange={handleOptionChange}
            />

            <div class="mt-12 flex items-center justify-center gap-x-6">
              <button
                type="button"
                class="text-md relative inline-flex items-center gap-x-2 rounded-lg bg-teal-600 px-6 py-2 font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Start {selectedLabel} Quiz
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="-mr-0.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              class="absolute left-1/2 top-1/2 -z-10 h-[72rem] w-[72rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                fill-opacity="0.7"
              ></circle>
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stop-color="#15b8a6"></stop>
                  <stop offset="1" stop-color="#15b8a6"></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page;
