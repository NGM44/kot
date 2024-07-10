import React from "react";
import { ICompanyModel } from "./CompanyPage";

const CompanyCard = ({ companyDetails }: { companyDetails: ICompanyModel }) => {
  return (
    <div className="bg-white rounded-sm shadow-md mb-8 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          {companyDetails.logo ? (
            <img
              src={companyDetails.logo}
              alt="Company Logo"
              className="w-16 h-16 rounded-full"
            />
          ) : (
            <span className="inline-block h-14 w-14 overflow-hidden rounded-full bg-gray-100">
              <svg
                className="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          )}
          <h1 className="text-2xl font-bold">{companyDetails.name}</h1>
        </div>
        <div className="flex space-x-8 gap-8">
          <div className="text-center">
            <p className="text-sm text-gray-600">Users</p>
            <p className="text-xl font-semibold">
              {companyDetails.devices.length}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Devices</p>
            <p className="text-xl font-semibold">
              {companyDetails.devices.length}
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <p className="flex items-center">
          <span className="mr-2">📍</span> {companyDetails.address}
        </p>
        <p className="flex items-center">
          <span className="mr-2">✉️</span> {companyDetails.email}
        </p>
        <a
          target={"blank"}
          href={companyDetails.website}
          className="flex items-center"
        >
          <span className="mr-2">🌐</span>{" "}
          <span className="underline">{companyDetails.website}</span>
        </a>

        <p className="flex items-center">
          <span className="mr-2">📞</span> {companyDetails.phone}
        </p>
      </div>
    </div>
  );
};

export default CompanyCard;
