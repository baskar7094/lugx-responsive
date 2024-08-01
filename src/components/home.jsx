import React from "react";
import Navbar from "./navbar";
import Cards from "./cards";
import Contact from "./contact";
export default function Home() {
  return (
    <>
      <main className="">
        <section className="bg-img">
          <div>
            <Navbar />
          </div>
          <div> 
            <Content
              sub_heading="welcome to lugx "
              heading="best gaming site ever!"
              para="LUGX gaming is free bootstrap 5 HTML CSS website template for your gaming websites. you can download and use this layout for commerical purposes. please tell your friends about templateMo."
              img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/banner-image.jpg"
            />
          </div>
        </section>
        <Cards />
        <section className="md:ring-2 ring-slate-300  md:py-5">
<h2 className="text-center md:text-2xl ">contact us </h2>
        <Contact />
        </section>
      </main>

      <footer>
        <div className="py-5 sm:text-center">
          <p className="text-white text-md ">
            copyright &copy; 2048 LUGX gaming Company. all rights reserved.
          </p>
          <p className="text-white text-md pt-3 text-center">
            design templateMo
          </p>
        </div>
      </footer>
    </>
  );
}

function Content(props) {
  return (
    <>
      <div className=" text-center py-5 sm:py-10 md:flex justify-around items-center  ">
        <div className="text-white overflow-x-hidden">
          <h5 className="text-lg uppercase md:text-sm
          xl:py-3 
          ">{props.sub_heading}</h5>
          <h1 className="text-3xl sm:text-4xl md:text-3xl py-3 font-bold uppercase sm:text-red-500 md:text-yellow-400 lg:text-blue-800 xl:text-white 2xl:text-red-900
          xl:py-4 xl:text-4xl
          ">
            {props.heading}
          </h1>
          <p className="text-sm mb-5 px-3 sm:px-8 md:px-2 md:w-96 text-wrap xl:w-96">{props.para}</p>
          <form className="mb-5 ">
            <input
              type="text"
              placeholder="Type Something"
              className="px-5  py-2 sm:px-8 rounded-s-2xl md:px-3 md:py-3"
            />
            <input
              type="submit"
              value="Search Now"
              className="bg-red-500 py-2 px-3 rounded-e-lg md:py-3 xl:px-5"
            />
          </form>
        </div>
        <div className="my-10 md:my-0 md:relative ">
          <img
            src={props.img}
            alt="..."
            className="size-4/5 sm:size-2/3 md:size-80 object-cover m-auto relative"
          />
          <span className=" absolute left-20 sm:left-52 -bottom-36 sm:-bottom-60 md:left-10 md:bottom-10 bg-yellow-500 px-3 py-2 md:px-2  rounded-full text-white font-bold ">
            -40%
          </span>
          <span className="absolute right-20 sm:right-48   top-3/4 bg-yellow-500 px-3 py-1 rounded-full text-white font-bold md:px-2 md:right-10 md:top-10">
            {" "}
            $22
          </span>
        </div>
      </div>
    </>
  );
}
