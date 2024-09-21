import { Device } from "./device";

export enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
  }
  
  export interface UserData {
    id: string;
    name: string;
    email: string;
    role: Role;
  }
  
  export interface ClientModel {
    id?: string;
    name: string;
    logo: string;
    address: string;
    email: string;
    phone: string;
    website: string;
  }
  

  interface User {
    id: string;
    clientId: string;
    createdAt: string;
    deactivated: boolean;
    email: string;
    name: string;
    password: string;
    role: string; // You might want to define other possible roles
    updatedAt: string;
  }
  
  export interface ClientDetailModel {
    id: string;
    address: string;
    createdAt: string;
    email: string;
    logo: string;
    name: string;
    phone: string;
    updatedAt: string;
    website: string;
    devices: Device[];
    users: User[];
  }


export type CustomResponse<T> = {
    message: string;
    data: T;
  };
  
 export  interface BannerMessage {
    id: string;
    bannerMessage: string;
    showBanner: boolean;
    bannerLink: string;
  }