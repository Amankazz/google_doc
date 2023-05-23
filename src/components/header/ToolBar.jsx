import React from "react";

import { GrUndo, GrRedo } from "react-icons/gr";
import { SlPrinter } from "react-icons/sl";
import {
  MdSpellcheck,
  MdFormatBold,
  MdFormatColorText,
  MdOutlineImage,
  MdChecklist,
  MdFormatIndentDecrease,
  MdFormatIndentIncrease,
  MdOutlineFormatLineSpacing,
  MdOutlineFormatClear,
  MdOutlineFormatListBulleted,
  MdKeyboardArrowUp,
  MdMoreVert,
} from "react-icons/md";
import { TfiPaintRoller } from "react-icons/tfi";
import { BiItalic, BiCommentAdd } from "react-icons/bi";
import { BsTypeUnderline } from "react-icons/bs";
import { RiPencilLine, RiMore2Fill } from "react-icons/ri";
import { IoMdLink } from "react-icons/io";
import { ImParagraphLeft } from "react-icons/im";
import { AiOutlineOrderedList, AiFillCaretDown } from "react-icons/ai";
import { RxDividerVertical } from "react-icons/rx";
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";

const ToolBar = () => {
  const hideButtons = window.innerWidth <= 768;
  return (
    <div>
      <div className="flex justify-between bg-[#EDF2FA] rounded-full mx-4 px-2 py-1 items-center ">
        <div className="flex items-center overflow-hidden">
          {!hideButtons && (
            <div className="flex items-center space-x-2">
              <button
                type="button"
                class="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
              >
                <GrUndo size={17} className="fill-slate-700 items-center" />
              </button>
              <button
                type="button"
                class="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
              >
                <GrRedo size={17} className="fill-slate-700 items-center" />
              </button>
              <button
                type="button"
                class="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
              >
                <SlPrinter size={17} className="fill-slate-700 items-center" />
              </button>
              <button
                type="button"
                class="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
              >
                <MdSpellcheck
                  size={17}
                  className="fill-slate-700 items-center"
                />
              </button>
              <button
                type="button"
                class="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
              >
                <TfiPaintRoller
                  size={17}
                  className="fill-slate-700 items-center"
                />
              </button>

              {/* Drop 100% */}

              <button
                type="button"
                className="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
              >
                <select name="size" className="bg-transparent w-16">
                  <option value="saab">100%</option>
                  <option value="saab">Fit</option>
                  <option value="mercedes">50%</option>
                  <option value="audi">75%</option>
                  <option value="audi">100%</option>
                  <option value="audi">125%</option>
                  <option value="audi">150%</option>
                  <option value="audi">200%</option>
                </select>
              </button>
              <RxDividerVertical size={30} opacity={0.1} />
            </div>
          )}
          {/* Drop Normal text */}
          <div className="flex justify-start space-x-2">
            <div className="hidden xsm:flex items-center space-x-2">
              <button
                type="button"
                class="bg-transparent flex font-normal text-md hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
              >
                <div className="mr-4 flex"> Normal </div>
                <AiFillCaretDown size={10} className="fill-slate-700 " />
              </button>
            </div>
            <div className="hidden vsm:flex items-center space-x-2">
              <button
                type="button"
                class="bg-transparent font-normal text-md flex hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
              >
                <div className="mr-4"> Arial</div>
                <AiFillCaretDown size={10} className="fill-slate-700 " />
              </button>
              <RxDividerVertical size={30} opacity={0.1} />
            </div>
          </div>
          {/* Drop Fsize */}

          <div className="hidden sm:flex items-center">
            <button
              type="button"
              className="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
            >
              <HiOutlineMinusSm />
            </button>
            <input
              type="text"
              className="w-10 text-center border-2 rounded-sm bg-transparent border-gray-700"
              value={11}
            />
            <button
              type="button"
              className="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  ml-1 "
            >
              <HiOutlinePlusSm />
            </button>
            <RxDividerVertical size={30} opacity={0.1} />
          </div>

          {/* Drop Bold */}
          <div className="hidden md:flex items-center">
            <button
              type="button"
              class="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
            >
              <MdFormatBold size={17} className="fill-slate-700 items-center" />
            </button>
            <button
              type="button"
              class="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
            >
              <BiItalic size={17} className="fill-slate-700 items-center" />
            </button>
            <button
              type="button"
              class="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
            >
              <BsTypeUnderline
                size={17}
                className="fill-slate-700 items-center"
              />
            </button>
            <button
              type="button"
              class="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
            >
              <MdFormatColorText
                size={17}
                className="fill-slate-700 items-center"
              />
            </button>
            <button
              type="button"
              class="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
            >
              <RiPencilLine size={17} className="fill-slate-700 items-center" />
            </button>
            <RxDividerVertical size={30} opacity={0.1} />
          </div>
          {/* Drop Fsize */}
          <div className="hidden lg:flex items-center">
            <button
              type="button"
              class="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
            >
              <IoMdLink size={17} className="fill-slate-700 items-center" />
            </button>

            <button
              type="button"
              class="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
            >
              <BiCommentAdd size={17} className="fill-slate-700 items-center" />
            </button>

            <button
              type="button"
              class="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
            >
              <MdOutlineImage
                size={17}
                className="fill-slate-700 items-center"
              />
            </button>
            <RxDividerVertical size={30} opacity={0.1} />
          </div>
          {/* Drop Fsize */}
          <div className="hidden xl:flex items-center">
            <button
              type="button"
              class="bg-transparent inline-flex hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
            >
              <ImParagraphLeft
                size={16}
                className="fill-slate-700 items-center mr-2"
              />
              <AiFillCaretDown size={10} className="fill-slate-700" />
            </button>

            <button
              type="button"
              class="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
            >
              <MdOutlineFormatLineSpacing
                size={17}
                className="fill-slate-700 items-center"
              />
            </button>
            <button
              type="button"
              class="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
            >
              <MdChecklist size={17} className="fill-slate-700 items-center" />
            </button>
            <button
              type="button"
              class="bg-transparent inline-flex hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
            >
              <MdOutlineFormatListBulleted
                size={17}
                className="fill-slate-700 items-center mr-2"
              />
              <AiFillCaretDown size={10} className="fill-slate-700" />
            </button>
            <button
              type="button"
              class="bg-transparent inline-flex hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
            >
              <AiOutlineOrderedList
                size={17}
                className="fill-slate-700 items-center mr-2"
              />
              <AiFillCaretDown size={10} className="fill-slate-700" />
            </button>
            <button
              type="button"
              class="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
            >
              <MdFormatIndentDecrease
                size={17}
                className="fill-slate-700 items-center"
              />
            </button>
            <button
              type="button"
              class="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
            >
              <MdFormatIndentIncrease
                size={17}
                className="fill-slate-700 items-center"
              />
            </button>
            <button
              type="button"
              class="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
            >
              <MdOutlineFormatClear
                size={17}
                className="fill-slate-700 items-center"
              />
            </button>
          </div>
          <div className="flex xl:hidden">
            <button
              type="button"
              class="bg-transparent hover:bg-gray-200 items-center rounded-sm px-1 py-1  mr-1 "
            >
              <MdMoreVert />
            </button>
          </div>
        </div>

        <div className="flex  items-center">
          <button
            type="button"
            class="bg-transparent flex hover:bg-gray-200 items-center rounded-full px-5  mr-1 "
          >
            <RiPencilLine
              size={17}
              className="fill-slate-700 items-center m-2"
            />
            <div className="px-2 mr-5">Editing</div>
            <AiFillCaretDown size={10} className="fill-slate-700 " />
          </button>
          <RxDividerVertical size={30} opacity={0.1} />
          <MdKeyboardArrowUp size={17} className="mr-2" />
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
