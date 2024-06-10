import React from "react";

const MainPage = () => {
  return (
    <div className="flex-grow flex justify-center items-center bg-slate-700 ">
      <div className="flex flex-col items-center">
        <div className="title">
          <h3 className="text-white text-4xl md:text-8xl font-bold">
            Shortener Link
          </h3>
        </div>
        <div className="input mt-8">
          <input
            type="text"
            name="shortener"
            id="sUrl"
            placeholder="Place your long URL here"
            className="bg-transparent border-2 rounded-l-xl py-2 px-4 text-white font-bold md:text-3xl"
          />
          <button className="border-2 rounded-r-xl py-2 px-4 bg-white md:text-3xl font-bold pr-5 hover:text-white hover:bg-slate-800">
            Shorten Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
