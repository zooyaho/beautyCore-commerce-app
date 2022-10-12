import { MutationHookParams } from '@apis/type';

import { useMutation } from '@tanstack/react-query';

import kakaoApi from './KakaoApi';

export const usePostKakaoMutation = (
  params?: MutationHookParams<typeof kakaoApi.postKakao>,
) => {
  return useMutation(kakaoApi.postKakao, {
    ...params?.options,
  });
};
