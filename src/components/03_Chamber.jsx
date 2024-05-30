import Room from "./04_Room";
const Chamber = ({ message1, onReply, replyMessage }) => {
  return (
    <div>
      Chamber <p>Message for JSD7: {message1}</p>
      <p>
        Reply from the Secret Room:{" "}
        <span className="text-red">
          {replyMessage ? replyMessage : "Waiting for a reply..."}
        </span>
      </p>
      <Room message1={message1} onReply={onReply} replyMessage={replyMessage} />
    </div>
  );
};

export default Chamber;
