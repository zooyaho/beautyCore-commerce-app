export interface UserRegisterBody {
  socialToken: string | string[] | undefined;
  name: string;
  nickname: string;
  email: string;
  phone: string;
  gender: string;
  age: number;
  profilePath: string;
  marketingAdAgree: boolean;
}
export interface UserMe {
  age: number;
  email: string;
  gender: string;
  id: number;
  name: string;
  nickname: string;
  phone: string;
  profile: string;
}
export interface WithdrawalReason {
  reason: string;
  additionalReason: string | undefined;
}
