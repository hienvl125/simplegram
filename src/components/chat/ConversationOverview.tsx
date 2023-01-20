import { FC } from "react";
import Image from "next/image";

interface ConversationOverviewProps {
  id: string;
  active: boolean;
}

const classesMap = {
  active: {
    conversation:
      "conversation flex items-center rounded-xl bg-simplegram-blue p-2 hover:cursor-pointer",
    lastMessageAuthor: "block text-base font-medium text-white",
    lastMessageBody: "block text-sm text-white",
  },
  inactive: {
    conversation:
      "flex items-center rounded-xl p-2 hover:cursor-pointer hover:bg-gray-100",
    lastMessageAuthor: "block text-base font-medium",
    lastMessageBody: "block text-sm text-gray-500",
  },
};

const ConversationOverview: FC<ConversationOverviewProps> = ({
  id,
  active,
}) => {
  const classKey = active ? "active" : "inactive";
  return (
    <div key={id} className={classesMap[classKey].conversation}>
      <Image
        className="conversation-thumbnail mr-3 rounded-full"
        src="/avatar.png"
        alt="avatar"
        width="54"
        height="54"
      />
      <div className="conversation-overview">
        <p className={classesMap[classKey].lastMessageAuthor}>John</p>
        <p className={classesMap[classKey].lastMessageBody}>
          last seen 7 hours ago
        </p>
      </div>
    </div>
  );
};

export default ConversationOverview;
