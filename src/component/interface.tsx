export interface IBaseUser {
    name: string;
    address: string;
    age: number | string;
  }
  export interface IUser extends IBaseUser {
    id: number;
  }
  