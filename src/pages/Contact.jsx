import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t ">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-medium text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            UNIVERSITY OF INFORMATION TECHNOLOGY <br /> Ho Chi Minh City, VN
          </p>
          <p className="text-gray-500">
            Tel: (+84) 342440220 <br /> Email: Selloth@gmail.com
          </p>
          <p className="font-medium text-xl text-gray-600">Career at Selloth</p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:text-white hover:bg-black transition-all duration-500">
            Explore Job
          </button>
        </div>
      </div>
      <df-messenger
        intent="WELCOME"
        chat-title="Test_ai_chat"
        agent-id="6c58e675-abcd-4013-a456-7f26e8666a14"
        language-code="en"
      ></df-messenger>
    </div>
  );
};

export default Contact;
