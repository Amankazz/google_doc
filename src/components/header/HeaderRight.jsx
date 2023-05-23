import React from "react";

const HeaderRight = () => {
  return (
    <div>
      <nav className="px-1 bg-transparent ">
        <div className="max-w-screen-xl py-1 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 text-base/2">
              <li>
                <a
                  href="#"
                  className="text-gray-900 rounded px-2 py-1 hover:bg-gray-200"
                  aria-current="page"
                >
                  File
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 rounded px-2 py-1 hover:bg-gray-200"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 rounded px-2 py-1 hover:bg-gray-200"
                >
                  View
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 rounded px-2 py-1 hover:bg-gray-200"
                >
                  Insert
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 rounded px-2 py-1 hover:bg-gray-200"
                  aria-current="page"
                >
                  Format
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 rounded px-2 py-1 hover:bg-gray-200"
                  aria-current="page"
                >
                  Tools
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 rounded px-2 py-1 hover:bg-gray-200"
                  aria-current="page"
                >
                  Extensions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 rounded px-2 py-1 hover:bg-gray-200"
                  aria-current="page"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderRight;
