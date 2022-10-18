import instance from '@apis/_axios/instance';

import { UserMe, UserRegisterBody } from './userApi.type';

export async function postUserRegister(body: UserRegisterBody): Promise<any> {
  const { data } = await instance({
    method: 'POST',
    url: `/v1/user/register/`,
    data: body,
  });
  return data;
}
export async function getUserMe(): Promise<UserMe> {
  const { data } = await instance(`/v1/user/me/`);
  return data;
}
export async function patchUserMe(body: UserRegisterBody): Promise<any> {
  const { data } = await instance({
    method: 'POST',
    url: `/v1/user/register/`,
    data: body,
  });
  console.log(body);
  console.log(data);
  return data;
}
export async function putUserMe(body: UserRegisterBody): Promise<any> {
  const { data } = await instance({
    method: 'POST',
    url: `/v1/user/register/`,
    data: body,
  });
  console.log(body);
  console.log(data);
  return data;
}
