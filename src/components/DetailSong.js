import React from "react";

export default function DetailSong() {
  return (
    <div className="col-span-1">
      <h2 className="text-cyan-500 font-bold">Now Playing</h2>
      <h2 className="text-neutral-400 text-2xl">Sing me </h2>
      <div className="w-[240px] m-auto mt-10">
        <img
          src="https://djmag.com/sites/default/files/2022-10/AW_Press_Photo_3.jpg"
          className="w-full"
          alt="avatar"
        />
      </div>
      <div className="flex justify-evenly items-center mt-10">
        <img
          className="w-[60px] rounded-full"
          src="https://djmag.com/sites/default/files/2022-10/AW_Press_Photo_3.jpg"
          alt="avatar"
        />
        <span className="text-xl text-white">Alan Walker</span>
      </div>
    </div>
  );
}
