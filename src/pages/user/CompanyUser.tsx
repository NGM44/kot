import React, { useState } from "react";
import AddUserModal from "../../modal/AddUserModal";
import DeviceMenu from "../device/DeviceMenu";
import { IUserModel } from "./CompanyPage";
import { useDeleteUser, useGenerateCredentials } from "../../queries/admin";
import { queryClient } from "../../queries/client";
import SendNotification from "../../modal/SendNotification";

const CompanyUser = ({ users }: { users: IUserModel[] }) => {
  const [dialog, setDialog] = useState(false);
  const [sendNotification, setSendNotification] = useState(false);
  const [email, setEmail] = useState("");
  const { mutate: generateCredentials } = useGenerateCredentials();
  const { mutate: deleteUser } = useDeleteUser();
  return (
    <div className="px-4 sm:px-6 col-span-2  lg:px-8 bg-white pt-6 border border-borderColor shadow-md rounded-md">
      {dialog && (
        <AddUserModal
          isOpen={dialog}
          onClose={() => {
            setDialog(false);
          }}
        />
      )}
      {sendNotification && (
        <SendNotification
          isOpen={sendNotification}
          onClose={() => {
            setSendNotification(false);
            setEmail("");
          }}
          email={email}
        />
      )}

      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Company User
          </h1>
          <p className="mt-2 text-sm text-gray-700 leading-0">
            {users.length} users
          </p>
        </div>
        {
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              onClick={() => {
                setDialog(true);
              }}
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add User
            </button>
          </div>
        }
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Mail
                  </th>

                  <th
                    scope="col"
                    className="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"
                  >
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {users.map((user) => (
                  <tr key={user.email}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                      {user.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {user.email}
                    </td>

                    <td className="whitespace-nowrap absolute z-50 py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                      <DeviceMenu
                        menu={[
                          {
                            name: "Generate Credential",
                            action: () => {
                              generateCredentials(user.email);
                            },
                          },
                          {
                            name: "Send Notification",
                            action: () => {
                              setSendNotification(true);
                              setEmail(user.email);
                              // SendNotification
                            },
                          },
                          {
                            name: "Delete",
                            action: () => {
                              deleteUser(user.id, {
                                onSuccess() {
                                  queryClient.invalidateQueries(
                                    "get-client-detail"
                                  );
                                },
                              });
                            },
                          },
                        ]}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyUser;
