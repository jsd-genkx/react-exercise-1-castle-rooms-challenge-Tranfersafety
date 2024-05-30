import Hall from "./05_Hall";
const Room = ({ message1, onReply, replyMessage }) => {
  return (
    <div>
      Room <p>Message for JSD7: {message1}</p>
      <p>
        Reply from the Secret Room:{" "}
        <span className="text-red">
          {replyMessage ? replyMessage : "Waiting for a reply..."}
        </span>
      </p>
      <Hall message1={message1} onReply={onReply} replyMessage={replyMessage} />
    </div>
  );
};

export default Room;
