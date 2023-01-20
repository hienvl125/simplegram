import { FC } from "react";

interface MessageProps {
  isCurrentUser: boolean;
}

const Message: FC<MessageProps> = ({ isCurrentUser }) => {
  return isCurrentUser ? (
    <div className="flex justify-end">
      <div className="mb-2 flex rounded-xl bg-simplegram-green-light">
        <p className="p-2 text-black">Hello</p>
        <small className="self-end px-2 py-1 font-light text-simplegram-green">
          08:20 PM
        </small>
      </div>
    </div>
  ) : (
    <div className="flex justify-start">
      <div className="mb-2 flex rounded-xl bg-white">
        <p className="p-2 text-black">Hello</p>
        <small className="self-end px-2 py-1 font-light text-gray-500">
          08:20 PM
        </small>
      </div>
    </div>
  );
};

export default Message;
