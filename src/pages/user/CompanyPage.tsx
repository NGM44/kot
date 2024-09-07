import CompanyDevice from "./CompanyDevice";
import CompanyUser from "./CompanyUser";
import CompanyCard from "./CompanyCard";
import { useGetClientsDetail } from "../../queries/admin";
import { useParams } from "react-router-dom";
import AdminBanner from "./AdminBanner";
import { useState } from "react";
import { useSendBannerMessage } from "../../queries/auth";
import GasMapping from "./GasMapping";

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
  gasMapping: IGasMapping;
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
export interface UserModel {
  id: string;
  name: string;
  email: string;
  role: any;
  clientId: string;
  client: ClientDataModel;
  devices: IDeviceModel[];
}
export interface ClientDataModel {
  id: string;
  name: string;
  logo: string;
  address: string;
  email: string;
  phone: string;
  website: string;
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

export interface IGasMapping {
  gas1:string;
  gas2:string;
  gas3:string;
  gas4:string;
  gas5:string;
  gas6:string;
  clientId: string;
}

const CompanyDashboard = () => {
  const { id } = useParams();
  const { data: clientDetails } = useGetClientsDetail(id ?? "");
  const [showBanner, setShowBanner] = useState(false);
  const { mutate: sendBannerMessage } = useSendBannerMessage();
  const sendBanner = (banner: any) => {
    sendBannerMessage({
      state: banner,
    });
  };
  return (
    <>
      {clientDetails ? (
        <div className="w-full">
          <CompanyCard
            companyDetails={clientDetails}
            onClick={() => {
              setShowBanner(!showBanner);
              sendBanner(!showBanner);
            }}
            showBanner={showBanner}
          />
          {showBanner && <AdminBanner companyDetails={clientDetails} />}
          <div className="grid grid-cols-4  gap-8">
            <CompanyDevice deviceList={clientDetails.devices ?? []} />
            <CompanyUser users={clientDetails.users} />
          </div>
          <div className="mt-8">
            <GasMapping gasMapping = {clientDetails.gasMapping}/>
          </div>
        </div>
      ) : (
        <div>Empty</div>
      )}
    </>
  );
};

export default CompanyDashboard;
