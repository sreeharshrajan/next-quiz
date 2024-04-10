import React from "react";
import Footer from "@/components/layout/Footer";
import Submit from "@/components/quiz/Submit";
import Option from "@/components/quiz/Option";
import Question from "@/components/quiz/Question";

async function getHello() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/hello`);
  console.log(data);
  return data;
  // return data.json();
}

async function Page({ question }) {
  const { message } = await getHello();
  console.log(message);
  return (
    <>
      <section className="text-gray-600  body-font">
        <div className="container px-5 py-24 mx-auto">
          <Question />
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <Option />
            <Option />
          </div>
          <Submit />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Page;
