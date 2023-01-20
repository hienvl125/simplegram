import { FC } from "react";

interface MessageInputProps {}

const MessageInput: FC<MessageInputProps> = () => {
  return (
    <div className="chat-input mx-auto w-full	max-w-screen-md px-2 sm:px-0">
      <div className="flex w-full">
        <div className="mr-2 flex grow items-end items-center items-center rounded-xl border bg-white p-2">
          <button className="mr-2 rounded-full p-2 hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#6b7280"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
          </button>

          <textarea
            className="h-6 grow resize-none outline-none"
            placeholder="Message"
            rows={10}
          ></textarea>
        </div>
        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-simplegram-blue hover:bg-simplegram-blue-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#ffffff"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
