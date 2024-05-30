import Tower from "./02_Tower";
const Castle = ({ message1, onReply, replyMessage }) => {
  return (
    <div>
      Castle
      <p>Message for JSD7: {message1}</p>
      <p>
        Reply from the Secret Room:{" "}
        <span className="text-red">
          {replyMessage ? replyMessage : "Waiting for a reply..."}
        </span>
      </p>
      <Tower
        message1={message1}
        onReply={onReply}
        replyMessage={replyMessage}
      />
    </div>
  );
};

export default Castle;
