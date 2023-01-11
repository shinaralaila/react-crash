import { useState } from "react";

const Message = (props) => {
  const [message, setMessage] = useState("Welcome");
  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage("Thank You");
        }}
      >
        Subscribe
      </button>
    </div>
  );
};
export default Message;
