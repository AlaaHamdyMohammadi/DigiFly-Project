import React from "react";

const Content = () => {
  return (
    <section className="width-[1021px] h-[240px] gap-8">
      <div className="flex items-center gap-4">
        <div className="w-16 h-1 rounded-full bg-[#6D5CBC]"></div>
        <h1 className="font-bold text-[32px] text-gray-900">Part1</h1>
      </div>
      <div className="w-[1021px] h-[67px] mt-3">
        <p className="font-normal text-lg text-gray-600">
          Utilize the provided Strapi API from the assessment to post user data
          into your Redux store. You are required to add one user into the
          &apos;users&apos; collection and display this data in a table using a
          GET request. Ensure the implementation of Redux for state management,
          including both POST requests for adding a user and GET requests for
          displaying data in the table.
        </p>
      </div>
    </section>
  );
};

export default Content;
