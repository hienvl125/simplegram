import { FC } from "react";
import Message from "./Message";

interface MessageListProps {}

const MessageList: FC<MessageListProps> = () => {
  return (
    <div className="chat-bubble green-scrollbar my-hover-overlay grow overflow-y-hidden">
      <div className="chat-bubble-wrapper mx-auto flex	min-h-full max-w-screen-md flex-col justify-end px-2 sm:px-0 sm:pr-16">
        <Message isCurrentUser={true} />
        <Message isCurrentUser={false} />
        <Message isCurrentUser={true} />
        <Message isCurrentUser={true} />
        <Message isCurrentUser={false} />
        <Message isCurrentUser={true} />
        <Message isCurrentUser={true} />
        <Message isCurrentUser={false} />
        <Message isCurrentUser={true} />
        <Message isCurrentUser={true} />
        <Message isCurrentUser={false} />
        <Message isCurrentUser={true} />
        <Message isCurrentUser={true} />
        <Message isCurrentUser={false} />
        <Message isCurrentUser={true} />
        <Message isCurrentUser={true} />
        <Message isCurrentUser={false} />
        <Message isCurrentUser={true} />
      </div>
    </div>
  );
};

export default MessageList;
