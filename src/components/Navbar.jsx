import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../firebase";
import LogOut from "./LogOut";
import SignIn from "./SignIn";

const style = {
  heading: `text-white text-3xl`,
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat App</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
