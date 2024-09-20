import { Fragment } from "react";
import {
  ChatBubbleLeftEllipsisIcon,
  TagIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { useGetMessage } from "../../queries/admin";
import { convertDate } from "../../utils/string";

export interface ActivityModel {
  id: string;
  type: string;
  name: string;
  date: string;
  comment: string;
}

export default function NotificationPopUP({
  activities,
}: {
  activities: ActivityModel[];
}) {
  return (
    <div className="flow-root">
      <ul
        role="list"
        className="-mb-8 p-8 px-10 w-72 bg-white shadow-xl rounded-xl"
      >
        {activities.map(
          (activityItem: ActivityModel, activityItemIdx: number) => (
            <li key={activityItem.id}>
              <div className="relative pb-8">
                <div className="relative flex items-start space-x-3">
                  <div className="relative">
                    <span className="absolute -right-1 rounded-tl bg-white px-0.5 py-px">
                      <ChatBubbleLeftEllipsisIcon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-400"
                      />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <div className="text-sm">
                        <a className="font-medium text-gray-900">
                          {activityItem.name}
                        </a>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        sent {convertDate(activityItem.date)}
                      </p>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      <p>{activityItem.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
