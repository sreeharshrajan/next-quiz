import Header from "@/components/layout/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div>
      <Header />
      <section class="container mx-auto lg:py-16 py-6 lg:px-5 lg:text-left px-10 text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About Us
        </h2>
        <p class="mt-4 text-gray-600 text-lg">
          Quiz Master is your go-to destination for sharpening your intellect
          and expanding your knowledge across various topics. Whether
          you&apos;re interested in general knowledge, science, technology, or
          more, Quiz Master has got you covered. Our carefully crafted quizzes
          are designed to challenge and educate you, making learning an engaging
          and enjoyable experience. Join our community of learners today and
          embark on a journey to become a true Quiz Master!
        </p>
        <div class="mt-8">
          <Link
            href="/quiz"
            class="text-blue-500 hover:text-blue-600 font-medium"
          >
            Start your journey with Quiz Master now!
            <span class="ml-2">&#8594;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Page;
