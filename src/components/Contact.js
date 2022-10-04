import React from "react";

function Contact() {
  return (
    <div
      name="Contact"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="flex flex-col justify-center mx-auto p-4 max-w-screen-lg  h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold  border-b-4 inline border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <form
            className="flex flex-col w-full md:w-1/2"
            method="POST"
            action="https://getform.io/f/4b259082-b6e2-429f-995f-d11baa25e2ae"
          >
            <input
              type="text"
              placeholder="Enter your name"
              name="Name"
              className="rounded-md bg-transparent border-2 p-2"
            />
            <input
              type="text"
              placeholder="Enter your email"
              name="Email"
              className="my-4 rounded-md bg-transparent border-2 p-2"
            />
            <textarea
              placeholder="Enter your message"
              name="Message"
              rows="10"
              className="  rounded-md bg-transparent border-2 p-2"
            />
            <button className="my-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md mx-auto py-3 px-6">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
