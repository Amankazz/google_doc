import React from "react";

import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <header>
      <div className="top-0 flex-auto justify-between bg-white pb-4">
        <HeaderSearch />
      </div>
    </header>
  );
};

export default Header;
