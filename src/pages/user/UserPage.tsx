import { useState } from "react";
import { classNames } from "../../utils/string";
import { useNavigate } from "react-router-dom";
import AddCompanyModal from "../../modal/AddCompanyModal";
import { useAddClient, useGetAllClients } from "../../queries/admin";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

const stats = [
  { name: "No. of Clients", value: "88", change: "+88%" },
  { name: "No. of User", value: "2", change: "2%" },
  { name: "Total Device", value: "10", change: "+10%" },
  { name: "Mesh", value: "0", change: "0%" },
];

export default function UserPage() {
  const navigate = useNavigate();
  const { data: clientDetails } = useGetAllClients();

  const [dialog, setDialog] = useState(false);
  return (
    <div className="flex flex-col gap-8">
      {dialog && (
        <AddCompanyModal
          isOpen={dialog}
          onClose={() => {
            setDialog(false);
          }}
        />
      )}
      <dl className="w-full mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4 border border-borderColor shadow-sm rounded-lg">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className={`flex cursor-pointer flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-8 sm:px-6 xl:px-8
              ${
                stat.name === "No. of Clients"
                  ? "rounded-s-md"
                  : stat.name === "Mesh"
                  ? "rounded-e-md"
                  : ""
              }
              `}
          >
            <dt className="text-sm font-medium leading-6 text-gray-500">
              {stat.name}
            </dt>
            <dd className={classNames("text-gray-700", "text-xs font-medium")}>
              {stat.change}
            </dd>
            <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
      <div className="px-4 sm:px-6 lg:px-8 bg-white pt-6 border border-borderColor shadow-sm rounded-md">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Client Information
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of client associated with us.
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
                Add Client
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
                      Device Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Device ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Model Type
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
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
                  {people.map((person) => (
                    <tr
                      onClick={() => {
                        navigate("/admin/user/asdasd");
                      }}
                      className="cursor-pointer"
                      key={person.email}
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.role}
                      </td>
                      <td className="whitespace-nowrap absolute z-50 py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                        {/* <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit<span className="sr-only">, {person.name}</span>
                        </a> */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
