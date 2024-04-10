import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-teal-500 mb-4 md:mb-0 cursor-pointer group transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-teal-500 group-hover:bg-teal-600 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl group-hover:text-teal-700">
            Quiz Master
          </span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-100	flex flex-wrap items-center text-base justify-center hover:cursor-pointer">
          <Link href="/topics" className="mr-5 dark:hover:text-teal-500">
            Topics
          </Link>
          <Link href="/results" className="mr-5 dark:hover:text-teal-500">
            Results
          </Link>
          <Link href="/about" className="mr-5 dark:hover:text-teal-500">
            About
          </Link>
        </nav>
        {/* <button className="inline-flex items-center text-teal-500 bg-gray-100 border-0 py-1 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Contact
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
      </div>
    </header>
  );
}

export default Header;
