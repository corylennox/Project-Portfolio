import React from "react";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import { connectLinks } from "../data";
import { useForm, ValidationError } from "@formspree/react";

export default function Connect() {
  const [state, handleSubmit] = useForm("xknlezpd");

  if (state.succeeded) {
    return (
      <div className="pb-4 px-4">
        <div className="flex justify-center items-center p-4 bg-green-100 rounded-lg border border-green-300">
          <svg
            className="w-6 h-6 text-green-600 mr-2 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
          <p className="text-green-800 font-semibold text-lg text-center">
            Your message has been submitted!
          </p>
        </div>
      </div>
    );
  }

  return (
    <section id="connect">
      <div className=" px-5 pt-5 pb-5 text-center text-secondary dark:text-textDark">
        <UserGroupIcon className="w-10 inline-block mb-2" />
        <h1 className="md:text-4xl text-3xl font-medium title-font">
          Connect With Me
        </h1>
        <p className="text-sm sm:text-base dark:text-textDark text-text mb-5">
          Interested in collaborating or learning more about my work? Feel free
          to reach out for my resume or just to say hello!
        </p>
        <div className="flex max-w-5xl mx-auto ">
          {connectLinks.map((connectLink, index) => {
            return (
              <div
                className="mx-auto flex justify-center items-center dark:text-textDark"
                key={index}
              >
                <a
                  href={connectLink.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {connectLink.icon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-end md:mr-10 pb-4 h-full mx-4">
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium dark:text-textDark text-text"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-indigo-500"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium dark:text-textDark text-text"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium dark:text-textDark text-text"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={state.submitting}
                className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
