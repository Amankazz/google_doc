import React from "react";
import "../header/HeaderSearch.css";
import docImg from "../../images/Docs.png";
import profileImg from "../../images/joker.jpg";
import HeaderRight from "./HeaderRight";
import { MdLockOutline, MdOutlineComment } from "react-icons/md";
import { BiVideo } from "react-icons/bi";

import { AiFillCaretDown, AiOutlineStar } from "react-icons/ai";

import { RxCounterClockwiseClock } from "react-icons/rx";
import ToolBar from "./ToolBar";

const HeaderSearch = () => {
  return (
    <div>
      <header className="flex justify-start items-center p-2  bg-white">
        <span className="cursor-pointer flex-shrink-0">
          <img src={docImg} className="h-10 scale-100" alt="Logo" />
        </span>

        <div className="flex flex-grow justify-between overflow-hidden">
          <div className=" ">
            <div className="flex ">
              <span className=" text-gray-500 self-center text-lg  whitespace-nowrap">
                <input
                  type="text"
                  className="px-2 bg-transparent border:none rounded-md focus:border-blue-400 hover:ring-1 hover:ring-inset hover:ring-gray-500 "
                  value="Untitled document"
                  contentEditable
                />
              </span>

              <button
                type="button"
                class="bg-transparent hover:bg-gray-200 items-center rounded-full px-1 py-1  mr-1 "
              >
                <AiOutlineStar
                  size={20}
                  className="fill-slate-700 items-center"
                />
              </button>
            </div>
            {/* File Saving components Header */}
            <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
              <HeaderRight />
            </div>
          </div>

          <div className="flex items-center justify-around mr-2 space-x-2">
            <button
              type="button"
              class="bg-transparent hover:bg-gray-200  rounded-full px-2 py-2 inline-flex items-center mr-2 mb-2 "
            >
              <RxCounterClockwiseClock size={25} className="fill-slate-700" />
            </button>

            <button
              type="button"
              class="bg-transparent hover:bg-gray-200 rounded-full px-2 py-2 inline-flex items-center mr-2 mb-2 "
            >
              <MdOutlineComment size={27} className="fill-slate-700" />
            </button>

            <button
              type="button"
              class="bg-transparent hover:bg-gray-200 rounded-full  px-3 py-2 inline-flex items-center mr-2 mb-2"
            >
              <BiVideo size={27} className="fill-slate-700 mr-2" />
              <AiFillCaretDown size={10} className="fill-slate-700" />
            </button>

            <button
              type="button"
              class="text-gray-800 bg-[#bfe6ff] hover:bg-[#B2D7EF]/90 focus:ring-4 focus:outline-none  font-normal rounded-full text-lg/2 px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:drop-shadow "
            >
              <MdLockOutline size={18} />
              <h5 className="px-2">Share</h5>
            </button>

            <button
              type="button"
              class="bg-transparent flex-shrink-0 hover:bg-gray-200 rounded-full px-1 py-1 inline-flex items-center mr-2 mb-2"
            >
              <img
                className="rounded-full h-9 w-9  hover:drop-shadow "
                src={profileImg}
                alt="image"
              />
            </button>
          </div>
        </div>
      </header>
      <div>
        <ToolBar />
      </div>
    </div>
  );
};

export default HeaderSearch;

// rgb(26,115,232)
