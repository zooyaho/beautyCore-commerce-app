import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Box } from '@chakra-ui/react';

import { usePostKakaoMutation } from '@apis/login/KakaoApi.mutation';

import { TokenType, setToken } from '@utils/localStorage/token';

const Callback = () => {
  const {
    push,
    query: { code, state },
  } = useRouter();

  const { mutate } = usePostKakaoMutation({
    options: {
      onSuccess: (data) => {
        if (!data.isRegister && data.socialToken) {
          push({ pathname: '/sign-up', query: { token: data.socialToken } });
        } else if (data.access && data.refresh) {
          setToken(data as TokenType);
          push('/home');
        }
      },
    },
  });
  useEffect(() => {
    if (code && state) {
      mutate({ code, state });
    }
  }, [mutate, code, state]);

  return <Box></Box>;
};

export default Callback;
