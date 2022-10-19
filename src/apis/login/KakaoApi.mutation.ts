import { MutationHookParams } from '@apis/type';

import { useMutation } from '@tanstack/react-query';

import { postKakao } from './KakaoApi';

export const usePostKakaoMutation = (
  params?: MutationHookParams<typeof postKakao>,
) => {
  return useMutation(postKakao, {
    ...params?.options,
  });
};
