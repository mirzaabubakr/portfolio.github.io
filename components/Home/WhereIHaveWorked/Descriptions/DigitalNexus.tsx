import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function DigitalNexus() {
  const tasks = [
    {
      text: "Designed Front-end user interfaces of web applications using Bootstrap, Material UI, Tailwind CSS and other design libraries.",
      keywords: ["Front-end", "Bootstrap", "Material UI", "Tailwind CSS"],
    },
    {
      text: "Developed front-end of web applications using React.js and integrated APIs to the front-end.",
      keywords: ["React.js", "APIs"],
    },
    {
      text: "Implemented browser compatibility and cross-browser responsiveness using modern techniques.",
      keywords: ["responsiveness", "compatibility", "cross-browser"],
    },
    {
      text: "Developed Application Programming Interfaces (APIs) using Express (NodeJS) for different web and mobile applications.",
      keywords: ["APIs", "Express", "NodeJS"],
    },
    {
      text: "Created Catchy Landing pages.",
      keywords: ["Catchy"],
    },
    {
      text: "Deployed NodeJS Applications in Heroku and Google Cloud Platform.",
      keywords: ["NodeJS", "Heroku", "Google Cloud Platform"],
    },
  ];
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          WEB APPLICATION DEVELOPER
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">Oct 2020 - June 2022</span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
      {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
