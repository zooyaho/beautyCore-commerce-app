import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { AxiosError } from 'axios';

import { CircularProgress, Flex, Img, useToast } from '@chakra-ui/react';

import { usePostKakaoMutation } from '@apis/login/KakaoApi.mutation';
import { getUserMe } from '@apis/user/userApi';

import { AUTH_STATUS } from '@constants/authStatus';
import { ROUTES } from '@constants/routes';
import { TokenType, setToken } from '@utils/localStorage/token';
import { UserType, setUser } from '@utils/localStorage/user';

const Callback = () => {
  const toast = useToast();
  const {
    push,
    query: { code, state },
  } = useRouter();

  const { mutate } = usePostKakaoMutation({
    options: {
      onSuccess: async (data) => {
        if (!data.isRegister && data.socialToken) {
          push({ pathname: '/sign-up', query: { token: data.socialToken } });
        } else if (data.access && data.refresh) {
          setToken(data as TokenType);
          const userData = await getUserMe();
          setUser({
            user_id: userData.id,
            auth_status: AUTH_STATUS.LOGIN,
          } as UserType);
          push(ROUTES.HOME);
        }
      },
    },
  });
  useEffect(() => {
    try {
      if (code && state) mutate({ code, state });
    } catch (error) {
      const { response } = error as unknown as AxiosError;
      if (response) {
        if (response.status.toString().slice(0, 1) === '4')
          toast({
            title: response,
            description: '재시도 부탁드립니다.',
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
        else if (response.status.toString().slice(0, 1) === '5')
          toast({
            title: response,
            description: '서버가 불안정합니다. 재시도 부탁드립니다.',
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
      }
    }
  }, [mutate, code, state, toast]);

  return (
    <Flex
      h="100vh"
      bgColor="primary.500"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="5rem"
    >
      <Img // LOGO
        src="/images/INTRO_LOGO.png"
        alt="Bueaty core logo"
        w="40%"
        h="5%"
      />
      <CircularProgress isIndeterminate color="primary.500" />
    </Flex>
  );
};

export default Callback;
