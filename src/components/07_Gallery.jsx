import Nook from "./08_Nook";
const Gallery = ({ message1, onReply, replyMessage }) => {
  return (
    <div>
      Gallery <p>Message for JSD7: {message1}</p>
      <p>
        Reply from the Secret Room:{" "}
        <span className="text-red">
          {replyMessage ? replyMessage : "Waiting for a reply..."}
        </span>
      </p>
      <Nook message1={message1} onReply={onReply} replyMessage={replyMessage} />
    </div>
  );
};

export default Gallery;
