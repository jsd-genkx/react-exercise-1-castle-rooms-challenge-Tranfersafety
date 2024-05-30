import Gallery from "./07_Gallery";
const Corridor = ({ message1, onReply, replyMessage }) => {
  return (
    <div>
      Corridor <p>Message for JSD7: {message1}</p>
      <p>
        Reply from the Secret Room:{" "}
        <span className="text-red">
          {replyMessage ? replyMessage : "Waiting for a reply..."}
        </span>
      </p>
      <Gallery
        message1={message1}
        onReply={onReply}
        replyMessage={replyMessage}
      />
    </div>
  );
};

export default Corridor;
