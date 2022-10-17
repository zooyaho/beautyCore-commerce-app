import instance from '@apis/_axios/instance';

import { UserRegisterBody } from './userApi.type';

export async function postUserRegister(body: UserRegisterBody): Promise<any> {
  const { data } = await instance({
    method: 'POST',
    url: `/v1/user/register/`,
    data: body,
  });
  console.log(body);
  console.log(data);
  return data;
}
