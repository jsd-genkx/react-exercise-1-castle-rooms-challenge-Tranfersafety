import { useState } from "react";
const SecretRoom = ({ message1, onReply }) => {
  return (
    <div>
      SecretRoom
      <p>Message for JSD7: {message1}</p>
      <input type="text" onChange={onReply} />
    </div>
  );
};

export default SecretRoom;
