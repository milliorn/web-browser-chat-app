import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";

const style = {
  main: `flex flex-col p-2.5 relative`,
};

const Chat = () => {
  const scroll = useRef();

  return (
    <>
      <main className={style.main}>
        <Message />
      </main>
      {/* Send Message */}
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
