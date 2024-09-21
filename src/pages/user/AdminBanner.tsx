import React, { useState } from "react";
import { ICompanyModel } from "./CompanyPage";
import { useSendBannerMessage } from "../../queries/auth";
import { toast } from "react-toastify";

const AdminBanner = ({ companyDetails }: { companyDetails: ICompanyModel }) => {
  const [addLink, setAddLink] = useState(false);
  const [bannerMessage, setBannerMessage] = useState(
    companyDetails.bannerMessage ?? ""
  );
  const [link, setLink] = useState(companyDetails.bannerLink ?? "");
  const { mutate: sendBannerMessage } = useSendBannerMessage();
  const sendBanner = () => {
    sendBannerMessage(
      {
        id: companyDetails?.id ?? "",
        bannerMessage: bannerMessage ?? "",
        showBanner: true,
        bannerLink: addLink ? link ?? "" : "",
      },
      {
        onSuccess(data, variables, context) {
          toast("Banner Updated Successfully", {
            type: "success",
            autoClose: 2000,
          });
        },
        onError() {
          toast("Banner Failed to update", {
            type: "error",
            autoClose: 2000,
          });
        },
      }
    );
  };
  return (
    <div className="p-4 mb-8 bg-white border shadow-box rounded-xl">
      <div className="flex flex-row w-full justify-between">
        <h1 className="text-md font-medium leading-6 text-gray-900 pb-1">
          Banner Message
        </h1>
      </div>
      <input
        id="name"
        name="name"
        type="text"
        value={bannerMessage}
        onChange={(e) => {
          setBannerMessage(e.target.value);
        }}
        required
        className="block w-full px-2 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />

      <div className="flex items-center py-1">
        <input
          id="addLink"
          name="addLink"
          type="checkbox"
          checked={addLink}
          onChange={() => setAddLink(!addLink)}
          className="h-4 w-4 rounded   cursor-pointer border-gray-300 text-indigo-600 border-2 focus:ring-indigo-600"
        />
        <label
          htmlFor="addLink"
          className="ml-3 block text-sm  cursor-pointer leading-6 text-gray-900"
        >
          Add link
        </label>
      </div>
      {addLink && (
        <div>
          <div className="flex flex-row w-full justify-between">
            <h1 className="text-md font-medium leading-6 text-gray-900 pb-1">
              Enter Link
            </h1>
          </div>
          <input
            id="name"
            name="name"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
            className="block w-full px-2 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      )}
      <button
        type="submit"
        onClick={sendBanner}
        className="flex w-40 cursor-pointer my-4 justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Update banner
      </button>
    </div>
  );
};

export default AdminBanner;
