import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Contrivers() {
  const tasks = [
    {
      text: "Developed front-end web applications using JavaScript frameworks and libraries such as React.js and Next.js",
      keywords: ["JavaScript", "React.js", "Next.js", "front-end web applications"],
    },
    {
      text: "Developed back-end web and mobile applications using Node.js framework (Nest.js)",
      keywords: ["back-end web and mobile applications", "Node.js", "Nest.js"],
    },
    {
      text: "Integrated Restful APIs with the front-end for enhanced functionality",
      keywords: ["Restful APIs"],
    },
    {
      text: "Developed APIs using Node.js, Flask, and Nest.js and integrated them with the front-end of web applications",
      keywords: ["APIs", "Node.js", "Nest.js"],
    },
    {
      text: "Created and Designed Databases using MySQL to store records.",
      keywords: ["MySQL"],
    },
    {
      text: "Communicated with clients to gather requirements and provided suggestions based on expertise.",
      keywords: ["Communicated", "requirements", "suggestions"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer 
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">July 2022 - Sept 2023</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
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
    </>
  );
}
