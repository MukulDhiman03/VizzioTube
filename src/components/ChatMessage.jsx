import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2 rounded-lg my-2">
      <img
        className="h-10"
        src="https://yt4.ggpht.com/ptN9pqok7prRpj5V6YBXJUk2oKcz4mCH3Y12-nizh9b5ZrY56jbrxrGhb_9w4n5lir-jmlfr=s32-c-k-c0x00ffffff-no-rj"
        alt="user"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
