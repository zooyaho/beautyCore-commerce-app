import instance from '@apis/_axios/instance';

import { TokenType } from '@utils/localStorage/token';

import { PostKakaoBody } from './KakaoApi.type';

interface PostKakaoReturnType extends Partial<TokenType> {
  socialToken?: string;
}

export async function postKakao(
  body: PostKakaoBody,
): Promise<PostKakaoReturnType> {
  const { data } = await instance({
    method: 'POST',
    url: `/v1/user/social_login/`,
    data: body,
  });
  console.log(body); // {code:'WfII7mMalYaW_E_vjk---', state: 'kakao'}
  console.log(data); // isRegister: false, socialToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1----"}
  return data;
}
