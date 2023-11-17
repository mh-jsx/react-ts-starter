import { ID, Role } from 'helpers/crud-helper/models';

export interface IAuthModel {
  api_token: string;
}

interface IAddress {
  _id: string;
}

export interface IUserModel {
  _id: ID;
  phoneNumber: string;
  weeklyPreference: string;
  balance: number;
  maxCreditLimit: number;
  role: Role;
  addresses: IAddress[];
  createdAt: string;
  updatedAt: string;
}
