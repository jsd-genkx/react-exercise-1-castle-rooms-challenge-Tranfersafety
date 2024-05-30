import SecretRoom from "./09_SecretRoom";
const Nook = ({ message1, onReply, replyMessage }) => {
  return (
    <div>
      Nook <p>Message for JSD7: {message1}</p>
      <p>
        Reply from the Secret Room:{" "}
        <span className="text-red">
          {replyMessage ? replyMessage : "Waiting for a reply..."}
        </span>
      </p>
      <SecretRoom
        message1={message1}
        onReply={onReply}
        replyMessage={replyMessage}
      />
    </div>
  );
};

export default Nook;
