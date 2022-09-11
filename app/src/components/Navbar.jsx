import React from "react";

const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl capitalize`,
};

const Navbar = () => {
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>chat app</h1>
    </div>
  );
};

export default Navbar;
