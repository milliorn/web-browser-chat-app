import React from "react";
import { auth } from "../firebase";

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute -mt-16 text-gray-600 text-xs`,
  received: `bg-gray-200 text-black float-left rounded-br-full`,
  sent: `bg-blue-600 text-white flex-row-reverse text-end float-right rounded-bl-full`,
};

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;

  return (
    <>
      <div>
        <div className={`${style.message} ${messageClass}`}>
          <p className={style.name}>
            {message.name}
            {" @ "}
            {new Date(message.timestamp.seconds * 1000)
              .toLocaleDateString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })
              .split("GMT")}
          </p>
          <p>{message.text}</p>
        </div>
      </div>
    </>
  );
};

export default Message;
