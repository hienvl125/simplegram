import { FC } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import Image from "next/image";

interface ChatContainerProps {}

const ChatContainer: FC<ChatContainerProps> = () => {
  return (
    <div className="chat w-full lg:w-3/4 lg:border-l">
      <div className="absolute z-9999 h-16 w-full bg-white">
        <div className="flex h-full items-center px-4">
          <Image
            className="mr-3 rounded-full"
            src="/avatar.png"
            alt="avatar"
            width="44"
            height="44"
          />
          <div className="chat-info">
            <p className="font-medium">John</p>
            <p className="text-sm font-normal text-gray-500">
              last seen recently
            </p>
          </div>
        </div>
      </div>
      <div className="chat-container flex h-full w-full flex-col pt-16 pb-2 md:pb-5">
        <MessageList />
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatContainer;
