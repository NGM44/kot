import CompanyDevice from "./CompanyDevice";
import CompanyUser from "./CompanyUser";
import CompanyCard from "./CompanyCard";
import { useGetClientsDetail } from "../../queries/admin";
import { useParams } from "react-router-dom";

export interface ICompanyModel {
  id: string;
  name: string;
  logo: string;
  address: string;
  email: string;
  phone: string;
  website: string;
  createdAt: Date;
  updatedAt: Date;
  users: IUserModel[];
  devices: IDeviceModel[];
}
export interface IUserModel {
  id: string;
  name: string;
  email: string;
  password: string;
  deactivated: boolean;
  role: any;
  clientId: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface IDeviceModel {
  id: string;
  name: string;
  identifier: string;
  status: string;
  modelType: string;
  clientId: string;
  createdAt: Date;
  updatedAt: Date;
}

const CompanyDashboard = () => {
  const { id } = useParams();
  const { data: clientDetails } = useGetClientsDetail(id ?? "");

  return (
    <>
      {clientDetails ? (
        <div className="container mx-auto p-4">
          <CompanyCard companyDetails={clientDetails} />
          <div className="grid grid-cols-3  gap-8">
            <CompanyDevice deviceList={clientDetails.devices ?? []} />
            <CompanyUser users={clientDetails.users} />
          </div>
        </div>
      ) : (
        <div>Empty</div>
      )}
    </>
  );
};

export default CompanyDashboard;
