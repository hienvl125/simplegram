import { type NextPage } from "next";
import ChatContainer from "../components/chat/ChatContainer";
import Sidebar from "../components/chat/Sidebar";

const Chat: NextPage = () => {
  return (
    <main className="flex h-screen border xl:container xl:mx-auto">
      <Sidebar />
      <ChatContainer />
    </main>
  );
};

export default Chat;
