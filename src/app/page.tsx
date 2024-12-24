import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center p-4 pl-12 pr-12 flex-col ">
      <div className="relative">
        <p className="italic">
          this is the app that is hosted on{" "}
          <span className="font-bold">aws</span> and it's using{" "}
          <span className="block p-4 pl-0">
            <span className="font-bold">docker</span>,{" "}
            <span className="font-bold">docker images</span>,{" "}
            <span className="font-bold">docker containers</span>,{" "}
            <span className="font-bold">container orchestration</span>,{" "}
            <span className="font-bold">kubernetes</span>,{" "}
            <span className="font-bold">prometheous</span> and{" "}
            <span className="font-bold">grafana ..</span>
            <span className="not-italic"> 😊</span>{" "}
          </span>
        </p>
        <Link
          href="/dashboard"
          className="flex gap-2 items-center absolute top-[100%] left-[0] p-4 pt-[.3rem] pb-[.3rem] text-sm rounded-md bg-black text-white transition-all duration-200 group"
        >
          Go to Dashboard <MoveRight className="inline-block transform transition-transform group-hover:translate-x-2 duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default page;
