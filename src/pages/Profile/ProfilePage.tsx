import AddUserModal from "../../modal/AddUserModal";
import { useEffect, useState } from "react";
import ChangePasswordModal from "../../modal/ChangePasswordModal";
import LogoutFromAllDevices from "../../modal/LogoutFromAllDevicesModal";
import { useGetUserDevices } from "../../queries/admin";

export default function Example() {
  const { data: user } = useGetUserDevices();
  const [dialog, setDialog] = useState(false);
  const [logOutDialog, setLogoutDialog] = useState(false);
  const [companyName, setCompanyName] = useState(user?.client.name);
  const [companyAddress, setCompanyAddress] = useState(user?.client.address);
  const [companyEmail, setCompanyEmail] = useState(user?.client.email);
  const [companyLogo, setCompanyLogo] = useState(user?.client.logo);
  const [companyPhone, setCompanyPhone] = useState(user?.client.phone);
  const [companyWebsite, setCompanyWebsite] = useState(user?.client.website);

  const [userName, setUserName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);

  useEffect(() => {
    setCompanyName(user?.client.name);
    setCompanyAddress(user?.client.address);
    setCompanyEmail(user?.client.email);
    setCompanyLogo(user?.client.logo);
    setCompanyPhone(user?.client.phone);
    setCompanyWebsite(user?.client.website);
    setEmail(user?.email);
    setUserName(user?.name);
  }, [user]);
  return (
    <form>
      {dialog && (
        <ChangePasswordModal
          isOpen={dialog}
          onClose={() => {
            setDialog(false);
          }}
        />
      )}
      {logOutDialog && (
        <LogoutFromAllDevices
          isOpen={logOutDialog}
          onClose={() => {
            setLogoutDialog(false);
          }}
        />
      )}
      <div className="space-y-12 bg-white rounded-xl shadow-box p-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10  pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Company Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Details of the company
            </p>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-4">
              <label
                htmlFor="company-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company name
              </label>
              <div className="mt-2">
                <input
                  id="company-name"
                  readOnly
                  name="company-name"
                  value={companyName}
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                  }}
                  type="text"
                  autoComplete="given-name"
                  className="block w-full px-2  bg-gray-100 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-1"></div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-nunber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contact number
              </label>
              <div className="mt-2">
                <input
                  id="phone-nunber"
                  readOnly
                  name="phone-nunber"
                  value={companyPhone}
                  onChange={(e) => {
                    setCompanyPhone(e.target.value);
                  }}
                  type="text"
                  className="block w-full px-2  bg-gray-100 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="website"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Website
              </label>
              <div className="mt-2">
                <input
                  id="website"
                  readOnly
                  name="website"
                  value={companyWebsite}
                  onChange={(e) => {
                    setCompanyWebsite(e.target.value);
                  }}
                  type="text"
                  className="block w-full px-2  bg-gray-100 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="companyemail"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company Email
              </label>
              <div className="mt-2">
                <input
                  id="companyemail"
                  name="companyemail"
                  type="email"
                  readOnly
                  value={companyEmail}
                  onChange={(e) => {
                    setCompanyEmail(e.target.value);
                  }}
                  className="block w-full px-2 bg-gray-100 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company Address
              </label>
              <div className="mt-2">
                <textarea
                  id="address"
                  name="address"
                  value={companyAddress}
                  onChange={(e) => {
                    setCompanyAddress(e.target.value);
                  }}
                  className="block w-full px-2 bg-gray-100 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10  pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              User Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
            Details of the user
            </p>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-4">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                User name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  value={userName}
                  onBlur={() => {
                    if (userName?.length === 0) setUserName(user?.name);
                  }}
                  name="first-name"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  type="text"
                  autoComplete="given-name"
                  className="block w-full px-2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  autoComplete="email"
                  className="block w-full px-2 bg-gray-100 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                onClick={() => {
                  setDialog(true);
                }}
                className="block cursor-pointer underline text-blue-700 text-sm font-medium leading-6"
              >
                Change Password
              </label>
            </div>
            <div className="sm:col-span-4">
              <label
                onClick={() => {
                  setLogoutDialog(true);
                }}
                className="block cursor-pointer underline text-blue-700 text-sm font-medium leading-6"
              >
                Log out from all devices
              </label>
            </div>
          </div>
        </div>
        {userName !== user?.name && (userName ?? "").length > 0 && (
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save Details
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
