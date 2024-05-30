import Corridor from "./06_Corridor";
const Hall = ({ message1, onReply, replyMessage }) => {
  return (
    <div>
      Hall <p>Message for JSD7: {message1}</p>
      <p>
        Reply from the Secret Room:{" "}
        <span className="text-red">
          {replyMessage ? replyMessage : "Waiting for a reply..."}
        </span>
      </p>
      <Corridor
        message1={message1}
        onReply={onReply}
        replyMessage={replyMessage}
      />
    </div>
  );
};

export default Hall;
