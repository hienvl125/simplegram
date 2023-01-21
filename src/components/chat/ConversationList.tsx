import { FC } from "react";
import Image from "next/image";
import ConversationOverview from "./ConversationOverview";

interface ConversationListProps {}

const ConversationList: FC<ConversationListProps> = ({}) => {
  return (
    <div className="conversations grow overflow-y-hidden my-hover-overlay px-2 gray-scrollbar">
      {["1", "2", "3", "4", "5", "6", "7", "8", "5", "6", "7", "8", "5", "6", "7", "8"].map((id) => (
        <ConversationOverview id={id} active={id === "1"} />
      ))}
    </div>
  );
};

export default ConversationList;
