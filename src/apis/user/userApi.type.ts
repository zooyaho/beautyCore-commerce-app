export interface UserRegisterBody {
  socialToken: string | string[] | undefined;
  name: string;
  nickname: string;
  email: string;
  phone: string;
  gender: string;
  age: string;
  profilePath: string;
  marketingAdAgree: boolean;
}
