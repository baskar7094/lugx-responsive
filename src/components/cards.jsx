import React from "react";
import { Link } from "react-router-dom";

export default function Cards() {
  return (
    <div>
      {/* service card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-center gap-8 my-10">
        <ServiceCard
          img="https://cdn.iconscout.com/icon/premium/png-512-thumb/storage-2209978-1844721.png?f=webp&w=256"
          alt="..."
          title="free storage"
        />
        <ServiceCard
          img="https://cdn.iconscout.com/icon/premium/png-512-thumb/human-1654623-1403796.png?f=webp&w=256"
          alt="...."
          title="user more"
        />
        <ServiceCard
          img="https://cdn.iconscout.com/icon/premium/png-512-thumb/replay-icon-9708977-7860609.png?f=webp&w=256"
          alt="..."
          title="replay ready"
        />
        <ServiceCard
          img="https://cdn.iconscout.com/icon/free/png-512/free-website-layout-3884240-3228157.png?f=webp&w=256"
          alt="..."
          title="easy layout"
        />
      </div>
      {/* tranding card */}
      <div className=" my-10 sm:my-20 ">
        <p className=" text-lg  uppercase text-red-500  text-center ">
          tranding
        </p>
        <h2 className=" uppercase text-xl py-3 sm:py-5  text-center">
          tranding games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:mx-10 justify-center items-center gap-10
        md:grid-cols-3
        xl:grid-cols-4
        ">
          <TrandCard
            type="action"
            name="assasin creed"
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-01.jpg"
            alt="..."
          />
          <TrandCard
            type="action"
            name="assasin creed"
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-02.jpg"
            alt="..."
          />
          <TrandCard
            type="action"
            name="assasin creed"
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-02.jpg"
            alt="..."
          />
          <TrandCard
            type="action"
            name="assasin creed"
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-03.jpg"
            alt="..."
          />
        </div>
      </div>

      {/* top card */}
      <section className="my-10">
        <h2 className="text-xl pl-3 uppercase shadow-inner text-center">
          top games{" "}
        </h2>
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 sm:mx-10  justify-center items-center gap-10
        md:grid-cols-3 
        xl:grid-cols-4
        ">
          <TopCard
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-01.jpg"
            alt="..."
            type="advanture"
            name="assasin creed"
          />
          <TopCard
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-01.jpg"
            alt="..."
            type="advanture"
            name="assasin creed"
          />
          <TopCard
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-01.jpg"
            alt="..."
            type="advanture"
            name="assasin creed"
          />
          <TopCard
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-01.jpg"
            alt="..."
            type="advanture"
            name="assasin creed"
          />
          <TopCard
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-01.jpg"
            alt="..."
            type="advanture"
            name="assasin creed"
          />
          <TopCard
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-01.jpg"
            alt="..."
            type="advanture"
            name="assasin creed"
          />
        </div>
      </section>

      {/* categories card */}
      <section className="my-10">
        <h2 className="text-xl text-center uppercase">top categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:mx-10 sm:gap-10 gap-8 justify-center items-center my-10
        md:grid-cols-3
        lg:grid-cols-4
        ">
          <CatgoriesCard
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-01.jpg"
            alt="...."
          />
          <CatgoriesCard
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-01.jpg"
            alt="...."
          />
          <CatgoriesCard
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-01.jpg"
            alt="...."
          />
          <CatgoriesCard
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-01.jpg"
            alt="...."
          />
          <CatgoriesCard
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-01.jpg"
            alt="...."
          />
        </div>
      </section>
    </div>
  );
}

function ServiceCard(props) {
  return (
    <>
      <div className="">
        <img
          src={props.img}
          alt={props.alt}
          className="size-32 m-auto ring-2 p-5 rounded-full
           md:size-28  "
        />
        <p 
        className="text-lg text-center 
        md:py-2
        "
        >{props.title}</p>
      </div>
    </>
  );
}

function TrandCard(props) {
  return (
    <>
      <div className="ring-2 ring-slate-300 shadow-2xl w-fit mx-auto ">
        <div className="relative">
          <img src={props.img} alt={props.alt} className="size-auto mx-auto" />
          <span className=" absolute top-8  right-7 ring-2 bg-blue-500 px-2 py-1 rounded-full ring-slate-200 text-white ">
            $20
          </span>
        </div>
        <div className="">
          <p className="pl-5 py-1 uppercase sm:text-sm ">{props.type}</p>
          <h4 className="pl-5 text-xl sm:text-lg">{props.name}</h4>
          <Link className="">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/buy-3412102-2851670.png?f=webp&w=256"
              alt="..."
              className="size-8 float-right -mt-12 mr-3 hover:shadow-2xl sm:size-7 "
            />
          </Link>
        </div>
      </div>
    </>
  );
}

function TopCard(props) {
  return (
    <>
      <div className="size-max m-auto text-center ring-2 pb-5 ring-slate-300 shadow-2xl ">
        <img src={props.img} alt={props.alt} className="size-72" />
        <p className="py-2 uppercase text-md">{props.type}</p>
        <h5 className="text-lg mb-4 ">{props.name}</h5>
        <Link
          to={"/"}
          className="bg-red-500 text-lg hover:shadow-2xl  px-3 py-2 text-white rounded-2xl"
        >
          Explore
        </Link>
      </div>
    </>
  );
}

function CatgoriesCard(props) {
  return (
    <>
      <div className="size-max m-auto ring-2 ring-slate-300 shadow-2xl  ">
        <p className="bg-blue-700 py-3 text-center text-lg uppercase rounded-sm text-white ">
          action
        </p>
        <img
          src={props.img}
          alt={props.alt}
          className="size-72  bg-cover object-cover"
        />
      </div>
    </>
  );
}
