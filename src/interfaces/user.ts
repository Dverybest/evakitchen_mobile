export interface ISignInDetails{
    email: string;
    password: string;
}
export interface ISignUpDetails extends ISignInDetails{
  fullName: string;
  phoneNumber: string;
}
export interface IUser{
    fullName: string;
    email:string
    phoneNumber: string;
}
