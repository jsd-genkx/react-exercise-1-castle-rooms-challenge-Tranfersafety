import Chamber from "./03_Chamber";
const Tower = ({ message1, onReply, replyMessage }) => {
  return (
    <div>
      Tower
      <p>Message for JSD7: {message1}</p>
      <p>
        Reply from the Secret Room:{" "}
        <span className="text-red">
          {replyMessage ? replyMessage : "Waiting for a reply..."}
        </span>
      </p>
      <Chamber
        message1={message1}
        onReply={onReply}
        replyMessage={replyMessage}
      />
    </div>
  );
};

export default Tower;
