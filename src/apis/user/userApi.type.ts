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
export interface UserMe {
  age: string;
  email: string;
  gender: string;
  id: number;
  name: string;
  nickname: string;
  phone: string;
  profile: string;
}
