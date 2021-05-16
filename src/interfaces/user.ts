export interface ISignInDetails{
    email: string;
    password: string;
}
export interface ISignUpDetails extends ISignInDetails{
  fullName: string;
  contact: string;
}
export interface IUser{
    fullName: string;
    email:string
    contact: string;
}
