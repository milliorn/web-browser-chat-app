import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";

const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl capitalize`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={style.nav}>
      <h1 className={style.heading}>chat app</h1>
      {/*Display sign in or sign out based on state */}
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
