import { AxiosInstance } from 'axios';

import instance from '@apis/_axios/instance';

import { ExampleDTOType, ExampleParamGetType } from './KakaoApi.type';

export class KakaoApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  postKakao = async (body: any): Promise<any> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/user/social_login/`,
      data: body,
    });
    return data;
  };
}

const kakaoApi = new KakaoApi();

export default kakaoApi;
