import { useState } from "react";
import DeviceMenu from "../device/DeviceMenu";
import { IGasMapping } from "./CompanyPage";
import GasMappingEditModal from "../../modal/GasMappingEditModal";

const GasMapping = ({ gasMapping }: { gasMapping: IGasMapping }) => {
  const [gasNameToBeUpdated, setGasNameToBeUpdated] = useState("");
  return (
    <div className="px-4 sm:px-6 col-span-2 lg:px-8 bg-white pt-6 border border-borderColor shadow-md rounded-md">
      {!!gasNameToBeUpdated && (
        <GasMappingEditModal
          gasNameToBeUpdated={gasNameToBeUpdated}
          gasMapping={gasMapping}
          onClose={() => {
            setGasNameToBeUpdated("");
          }}
        />
      )}
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Gas mappings
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of gases shown in dashboard
          </p>
        </div>
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
                    Gas Name
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                  >
                    Mapped Name
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
                <tr key={gasMapping.gas1}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                    Gas 1
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                    {gasMapping.gas1}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                    <DeviceMenu
                      menu={[
                        {
                          name: "Edit Mapping",
                          action: () => {
                            setGasNameToBeUpdated("Gas 1");
                          },
                        },
                      ]}
                    />
                  </td>
                </tr>
                <tr key={gasMapping.gas2}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                    Gas 2
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                    {gasMapping.gas2}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                    <DeviceMenu
                      menu={[
                        {
                          name: "Edit Mapping",
                          action: () => {
                            setGasNameToBeUpdated("Gas 2");
                          },
                        },
                      ]}
                    />
                  </td>
                </tr>
                <tr key={gasMapping.gas3}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                    Gas 3
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                    {gasMapping.gas3}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                    <DeviceMenu
                      menu={[
                        {
                          name: "Edit Mapping",
                          action: () => {
                            setGasNameToBeUpdated("Gas 3");
                          },
                        },
                      ]}
                    />
                  </td>
                </tr>
                <tr key={gasMapping.gas4}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                    Gas 4
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                    {gasMapping.gas4}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                    <DeviceMenu
                      menu={[
                        {
                          name: "Edit Mapping",
                          action: () => {
                            setGasNameToBeUpdated("Gas 4");
                          },
                        },
                      ]}
                    />
                  </td>
                </tr>
                <tr key={gasMapping.gas5}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                    Gas 5
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                    {gasMapping.gas5}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                    <DeviceMenu
                      menu={[
                        {
                          name: "Edit Mapping",
                          action: () => {
                            setGasNameToBeUpdated("Gas 5");
                          },
                        },
                      ]}
                    />
                  </td>
                </tr>
                <tr key={gasMapping.gas6}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                    Gas 6
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                    {gasMapping.gas6}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                    <DeviceMenu
                      menu={[
                        {
                          name: "Edit Mapping",
                          action: () => {
                            setGasNameToBeUpdated("Gas 6");
                          },
                        },
                      ]}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GasMapping;
