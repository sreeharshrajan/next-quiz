import React from "react";

export default function Notfound() {
  return (
    <section class="flex justify-center items-center min-h-dvh bg-gray-50">
      <div class="container flex flex-col items-center ">
        <div class="flex flex-col gap-6 lg:gap-8 max-w-md text-center">
          <h2 class="font-extrabold text-9xl text-gray-600">
            <span class="sr-only">Error</span>404
          </h2>
          <p class="text-2xl md:text-3xl dark:text-gray-500">
            Sorry, we couldn&apos;t find this page.
          </p>
          <div className="">
            <a
              href="/"
              class="px-4 py-2 text-base font-semibold rounded bg-teal-600 text-gray-50"
            >
              Back to home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
