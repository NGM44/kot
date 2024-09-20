import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";

const UpdatePage = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateProgress, setUpdateProgress] = useState(0);
  const [updateComplete, setUpdateComplete] = useState(false);

  const updateInfo = {
    version: "4.0.0",
    releaseDate: "September 15, 2024",
    size: "750 MB",
    deviceName: "TechCorp Ultra X3",
    currentVersion: "3.5.2",
  };

  const handleUpdate = () => {
    setIsUpdating(true);
    const interval = setInterval(() => {
      setUpdateProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsUpdating(false);
          setUpdateComplete(true);
          return 100;
        }
        return prevProgress + 5;
      });
    }, 300);
  };

  return (
    <div className="bg-white rounded-2xl mx-auto shadow-md overflow-hidden w-full">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 p-6 text-white">
        <h2 className="text-2xl font-bold">Software Update</h2>
        <p className="text-indigo-100">New features await you!</p>
      </div>
      <div className="grid grid-cols-10">
        <div className="p-6 col-span-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Current version</span>
            <span className="text-gray-800 font-semibold">
              {updateInfo.currentVersion}
            </span>
          </div>

          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-600">New version</span>
            <span className="text-indigo-600 font-bold text-lg">
              {updateInfo.version}
            </span>
          </div>

          <div className="bg-indigo-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center text-sm">
              <span className="text-indigo-700">Update size</span>
              <span className="text-indigo-800 font-medium">
                {updateInfo.size}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm mt-2">
              <span className="text-indigo-700">Release date</span>
              <span className="text-indigo-800 font-medium">
                {updateInfo.releaseDate}
              </span>
            </div>
          </div>

          {!updateComplete ? (
            <div>
              {!isUpdating ? (
                <button
                  onClick={handleUpdate}
                  className="w-full cursor-pointer py-3 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white rounded-lg font-semibold shadow-md hover:from-indigo-700 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-0.5"
                >
                  Update Now
                </button>
              ) : (
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Updating...
                    </span>
                    <span className="text-sm font-medium text-indigo-600">
                      {updateProgress}%
                    </span>
                  </div>
                  <div className="w-full bg-indigo-100 rounded-full h-2.5 mb-4">
                    <div
                      className="bg-gradient-to-r from-indigo-600 to-indigo-300 h-2.5 rounded-full transition-all duration-300 ease-in-out"
                      style={{ width: `${updateProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-4 px-6 bg-green-100 text-green-800 rounded-lg">
              <p className="font-semibold">Update Complete!</p>
              <p className="text-sm mt-1">
                Your {updateInfo.deviceName} is now on version{" "}
                {updateInfo.version}
              </p>
            </div>
          )}

          <p className="text-xs text-gray-500 mt-4 text-center">
            Make sure your device is plugged in and connected to Wi-Fi before
            updating.
          </p>
        </div>
        <div className="col-span-6">
          <ul className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CloudArrowUpIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Push to deploy.
                </strong>{" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </span>
            </li>
            <li className="flex gap-x-3">
              <LockClosedIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  SSL certificates.
                </strong>{" "}
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.
              </span>
            </li>
            <li className="flex gap-x-3">
              <ServerIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Database backups.
                </strong>{" "}
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                Et magna sit morbi lobortis.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
