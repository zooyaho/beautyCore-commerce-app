import instance from '@apis/_axios/instance';

import { UserMe, UserRegisterBody, WithdrawalReason } from './userApi.type';

export async function postUserRegister(body: UserRegisterBody) {
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
export async function putUserMe(body: UserMe): Promise<UserMe> {
  const { data } = await instance({
    method: 'PUT',
    url: `/v1/user/me/`,
    data: body,
  });
  return data;
}
export async function deleteUserWithdrawal(id: number) {
  const { data } = await instance({
    method: 'DELETE',
    url: `/v1/user/withdrawal/${id}/`,
  });
  return data;
}
export async function PostUserWithdrawalReason(body: WithdrawalReason) {
  const { data } = await instance({
    method: 'POST',
    url: `/v1/user/withdrawal/reason/`,
    data: body,
  });
  console.log('WithdrawalReason data: ', data);
  return data;
}
