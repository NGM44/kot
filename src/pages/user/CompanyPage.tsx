import React from "react";
import CompanyDevice from "./CompanyDevice";
import CompanyUser from "./CompanyUser";
import CompanyCard from "./CompanyCard";
import { useGetClientsDetail } from "../../queries/admin";
import { useParams } from "react-router-dom";

export type UserModel = {
  id: string;
  name: string;
  email: string;
};

export type DeviceModel = {
  id: string;
  name: string;
  modelName: string;
  type: string;
  status: string;
};

export type CompanyModel = {
  name: string;
  logo?: string;
  website?: string;
  address: string;
  email: string;
  phone: string;
  usersCount: number;
  deviceCount: number;
  users?: UserModel[];
  devices?: DeviceModel[];
};

const CompanyDashboard = () => {
  const { id } = useParams();
  const { data: clientDetails } = useGetClientsDetail(id ?? "");
  const usersList: UserModel[] = [
    { id: "12312312", name: "John Doe", email: "john@techcorp.com" },
    { id: "12312323", name: "Jane Smith", email: "jane@techcorp.com" },
    { id: "1231232132", name: "Bob Johnson", email: "bob@techcorp.com" },
  ];

  const devices: DeviceModel[] = [
    {
      id: "3242343",
      name: "Battery Room",
      modelName: "SENSE4032",
      type: "Sense Gate",
      status: "Active",
    },
    {
      id: "3242323",
      name: "Server Room",
      type: "Sense Node",
      modelName: "SENSE4232",
      status: "Active",
    },
    {
      id: "324223",
      name: "Server Room 2",
      modelName: "SENSE32",
      type: "Sense Node",
      status: "InActive",
    },
  ];
  const companyDetails = {
    name: "TechCorp Solutions",
    logo: "", // Placeholder logo
    address: "123 Tech Street, Silicon Valley, CA 94000",
    email: "contact@techcorp.com",
    phone: "9903445894",
    website: "https://www.ngm44.com",
    usersCount: 3,
    deviceCount: 2,
    users: usersList,
    devices: devices,
  };

  return (
    <div className="container mx-auto p-4">
      <CompanyCard companyDetails={companyDetails} />
      <div className="grid grid-cols-3  gap-8">
        <CompanyDevice deviceList={companyDetails.devices} />
        <CompanyUser users={companyDetails.users} />
      </div>
    </div>
  );
};

export default CompanyDashboard;
