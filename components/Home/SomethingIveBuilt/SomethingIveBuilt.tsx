import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  1*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <a
                href="https://dashboard.samodrei.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"./samodrei.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"./samodrei.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Samodrei - Dashboard{" "}
                </span>
                <a
                  href="https://dashboard.samodrei.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Pharma Company Dashboard
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left ">
                  At <span className="text-AAsecondary">Samodrei</span>, The
                  primary objective was to track and manage interactions between
                  product advocates and prescriber effectively. I developed a
                  user-friendly, real-time React (
                  <span className="text-AAsecondary">Next.js</span>) /{" "}
                  <span className="text-AAsecondary">Material-UI</span>{" "}
                  dashboard and{" "}
                  <span className="text-AAsecondary">backend</span> using Node (
                  <span className="text-AAsecondary">Nest.js</span>) / RDBMS (
                  <span className="text-AAsecondary">MySQL</span>) for a{" "}
                  <span className="text-AAsecondary">
                    pharmaceutical company
                  </span>
                  , incorporating modern web practices and integrating
                  third-party APIs like{" "}
                  <span className="text-AAsecondary">RingCentral</span> and{" "}
                  <span className="text-AAsecondary">Sendgrid</span> to enhance
                  product advocate-prescriber interactions.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">Material-UI</span>
                <span className="pr-4 z-10">RingCentral</span>
                <span className="pr-4 z-10">Sendgrid</span>
                <span className="pr-4 z-10">Nest.js</span>
                <span className="pr-4 z-10">MySQL</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://dashboard.samodrei.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://dashboard.ascthem.com/login/"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"./ascthem.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"./ascthem.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <a
                  href="https://dashboard.ascthem.com/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    ASCTHEM - CRM
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  I had the opportunity to develop dashboard from scratch using
                  React (<span className="text-AAsecondary">Next.js</span>) /{" "}
                  <span className="text-AAsecondary">Material-UI</span> and{" "}
                  <span className="text-AAsecondary">backend</span> using Node (
                  <span className="text-AAsecondary">Nest.js</span>) / RDBMS (
                  <span className="text-AAsecondary">MySQL</span>). The primary
                  focus of the dashboard was to facilitate counterfeit drug
                  detection, enhancing safety and trust within the
                  pharmaceutical industry.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">Material-UI</span>
                <span className="pr-4 z-10">Sendgrid</span>
                <span className="pr-4 z-10">Nest.js</span>
                <span className="pr-4 z-10">MySQL</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://dashboard.ascthem.com/login/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  3*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <a
                href="https://portal.getinca.com/login/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"./inca.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"./inca.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  INCA - PORTAL{" "}
                </span>
                <a
                  href="https://portal.getinca.com/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Telecommunications Company Dashboard
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left ">
                  The project&apos;s core focus was to modernize customer call
                  management for businesses. It achieved this by{" "}
                  <span className="text-AAsecondary"></span>revamping the portal
                  using <span className="text-AAsecondary">React</span> and{" "}
                  <span className="text-AAsecondary">Bootstrap</span> for a more
                  user-friendly design. The standout features included real-time
                  data visualizations for call-related metrics and seamless
                  integration with third-party APIs like{" "}
                  <span className="text-AAsecondary">RingCentral</span>, greatly
                  enhancing communication efficiency.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">React.js</span>
                <span className="pr-4 z-10">Bootstrap</span>
                <span className="pr-4 z-10">Redux Toolkit</span>
                <span className="pr-4 z-10">API Integration</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://portal.getinca.com/login/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project 4 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://papaya-gingersnap-504101.netlify.app/"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"./crownclothing.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"./crownclothing.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Crown Clothing
                </span>
                <a
                  href="https://papaya-gingersnap-504101.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Ecommerce Website
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  This E-commerce application uses{" "}
                  <span className="text-AAsecondary text-base">React</span> and{" "}
                  <span className="text-AAsecondary text-base">Bootstrap</span>{" "}
                  for the front-end, with{" "}
                  <span className="text-AAsecondary text-base">Firebase</span>{" "}
                  handling authentication and database functions. It offers a
                  secure and responsive platform for selling products, providing
                  an efficient user experience and simplified management for
                  both customers and the business.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">React.js</span>
                <span className="pr-4 z-10">Redux</span>
                <span className="pr-4 z-10">Bootstrap</span>
                <span className="pr-4 z-10">Firebase</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://papaya-gingersnap-504101.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  5 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              {/* <a
                href="https://shapeup-gym.web.app/"
                target={"_blank"}
                rel="noreferrer"
              > */}
              <div
                // onClick={}
                className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
              ></div>
              {/* </a> */}

              <Img
                src={"./ezrealestate.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"./ezrealestate.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  EZ Multi-Tenant CRM
                </span>
                {/* <a
                  href="https://shapeup-gym.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                  Real-Estate Company
                </span>
                {/* </a> */}
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left ">
                  <span className="text-AAsecondary text-base">
                    EZ Multi-Tenant CRM{" "}
                  </span>
                  revolutionizes property management with a{" "}
                  <span className="text-AAsecondary text-base">
                    Next.js (TypeScript){" "}
                  </span>
                  <span className="text-AAsecondary text-base">
                    Material UI{" "}
                  </span>
                  dashboard, real-time React Charts, and seamless integration of
                  <span className="text-AAsecondary text-base">
                    {" "}
                    Google Maps{" "}
                  </span>{" "}
                  and{" "}
                  <span className="text-AAsecondary text-base">
                    Google Calendar{" "}
                  </span>
                  APIs. A notification system powered by{" "}
                  <span className="text-AAsecondary text-base">Socket.io </span>{" "}
                  and{" "}
                  <span className="text-AAsecondary text-base">
                    Node Mailer{" "}
                  </span>{" "}
                  enhances communication. The multi-tenant support is backed by
                  <span className="text-AAsecondary text-base"> MySQL </span>,
                  while{" "}
                  <span className="text-AAsecondary text-base">Nest.js </span>,
                  ensures a secure backend with robust user authentication and
                  authorization mechanisms.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">Nest.js</span>
                <span className="pr-4 z-10">MySQL</span>
                <span className="pr-4 z-10">Google Cloud Platform</span>
                <span className="pr-4 z-10">whatsapp-web.js</span>
              </ul>
              {/* <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://shapeup-gym.web.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div> */}
            </div>
          </div>
        </div>

        {/* // ?  Project 6 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://dev.agents.veronicasins.com/login"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"./veronica.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"./veronica.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Veronica Inc</span>
                <a
                  href="https://dev.agents.veronicasins.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Insurance Company Website
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  The primary objective was to create a separate, user-friendly
                  interface for agents to efficiently manage their
                  insurance-related tasks, streamlining their workflow and
                  enhancing productivity. I had the opportunity to develop
                  dashboard from scratch with other teammates using React (
                  <span className="text-AAsecondary">Next.js</span>) /{" "}
                  <span className="text-AAsecondary">Tailwind CSS</span>.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">React.js</span>
                <span className="pr-4 z-10">Redux</span>
                <span className="pr-4 z-10">Tailwind CSS</span>
                <span className="pr-4 z-10">Socket.io</span>
                <span className="pr-4 z-10">Twilio</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://dev.agents.veronicasins.com/login"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project  7 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <a
                href="https://shapeup-gym.web.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"./shapeup.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"./shapeup.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Shape Up </span>
                <a
                  href="https://shapeup-gym.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    A Gym Website
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left ">
                  <span className="text-AAsecondary text-base">Shape Up </span>
                  is a dynamic gym website built using{" "}
                  <span className="text-AAsecondary text-base">
                    React.js
                  </span>{" "}
                  and{" "}
                  <span className="text-AAsecondary text-base">Bootstrap</span>,
                  ensuring a visually appealing and responsive user interface.
                  It leverages the power of{" "}
                  <span className="text-AAsecondary text-base">
                    Redux Toolkit
                  </span>{" "}
                  for efficient state management, enhancing the user experience.
                  The website seamlessly integrates with APIs, providing
                  real-time data on services, schedules, and user profiles,
                  making it a comprehensive platform for gym enthusiasts. With a
                  focus on user engagement and accessibility, Shape Up offers a
                  well-rounded fitness experience and fosters a strong online
                  community for fitness enthusiasts.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">React.js</span>
                <span className="pr-4 z-10">Bootstrap</span>
                <span className="pr-4 z-10">Redux Toolkit</span>
                <span className="pr-4 z-10">API Integration</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://shapeup-gym.web.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
