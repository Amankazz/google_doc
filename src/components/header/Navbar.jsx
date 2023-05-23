import React, { useState } from "react";
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
} from "react-icons/md";
import { IoMdLink } from "react-icons/io";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuItems = [
    { icon: IoMdLink, label: "Home" },
    { icon: MdSpellcheck, label: "Home" },
    { icon: MdFormatBold, label: "Home" },
    { icon: IoMdLink, label: "Home" },
    /* Add other menu items with icons and labels */
  ];

  const hiddenItems = [
    { icon: MdFormatColorText, label: "Home" },
    { icon: MdOutlineImage, label: "Home" },
    { icon: MdChecklist, label: "Home" },
    { icon: MdFormatIndentDecrease, label: "Home" },
    { icon: MdFormatIndentIncrease, label: "Home" },
    /* Add hidden menu items with icons and labels */
  ];

  return (
    <nav className="flex items-center justify-between bg-gray-800 py-2 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <div className="mr-4">
          <button
            type="button"
            className="text-white focus:outline-none sm:hidden"
            onClick={toggleMenu}
          >
            <IoMdLink className="h-6 w-6" />
          </button>
        </div>

        <div className="flex items-center">
          {menuItems.map((item, index) => (
            <button
              key={index}
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none mx-2 sm:mx-3 lg:mx-4"
            >
              <item.icon className="h-6 w-6" />
              <span className="ml-1 sm:hidden">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="hidden sm:flex sm:items-center">
        <div className="relative">
          <button
            type="button"
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <IoMdLink className="h-6 w-6" />
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg">
              {hiddenItems.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  className="text-gray-800 hover:bg-gray-200 block px-4 py-2 w-full text-left"
                >
                  <item.icon className="h-5 w-5 inline-block mr-2" />
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
