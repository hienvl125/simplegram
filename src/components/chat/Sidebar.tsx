import { FC } from "react";
import ConversationList from "./ConversationList";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  return (
    <div className="side-bar hidden flex-col lg:flex lg:w-1/4">
      <div className="side-bar-header flex h-14 items-center px-4 py-2">
        <button className="mr-2 rounded-full p-2 hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#6b7280"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className="flex grow items-center rounded-full border p-2 hover:border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#9ca3af"
            className="mr-2 h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input type="text" placeholder="Search" className="grow outline-0" />
        </div>
      </div>
      <ConversationList />
    </div>
  );
};

export default Sidebar;
