import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center p-4 pl-16 pr-16">
      <p className="italic">
        this is the app that is hosted on <span className="font-bold">aws</span>{" "}
        and it's using{" "}
        <span className="block p-4 pl-0">
          <span className="font-bold">docker</span>,{" "}
          <span className="font-bold">docker images</span>,{" "}
          <span className="font-bold">docker containers</span>,{" "}
          <span className="font-bold">container orchestration</span>,{" "}
          <span className="font-bold">kubernetes</span>,{" "}
          <span className="font-bold">prometheous</span> and{" "}
          <span className="font-bold">grafana ...</span>
          <span className="not-italic"> 😊</span>{" "}
        </span>
      </p>
    </div>
  );
};

export default page;
