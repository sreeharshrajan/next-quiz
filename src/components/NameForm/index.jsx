import React from "react";
import Link from "next/link";

function NameForm() {
  return (
    <section className="min-h-dvh flex justify-center items-center ">
      <div class="flex flex-col w-full max-w-sm mx-auto p-4 border border-gray-200 bg-white shadow">
        <div class="flex flex-col mb-4">
          <label
            for="name"
            class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
          >
            Name
          </label>

          <div class="relative">
            <div class="absolute flex border border-transparent left-0 top-0 h-full w-10">
              <div class="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-5 w-5"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              value=""
              class="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12 border-red-500"
            />
          </div>

          <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            Invalid username field !
          </span>
        </div>
        <Link
          href="/quiz"
          class="text-blue-500 hover:text-blue-600 font-medium"
        >
          Start your journey with Quiz Master
          <span class="ml-2">&#8594;</span>
        </Link>
      </div>
    </section>
  );
}

export default NameForm;
