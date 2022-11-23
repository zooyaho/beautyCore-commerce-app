import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { CircularProgress, Flex, Img } from '@chakra-ui/react';

import { usePostKakaoMutation } from '@apis/login/KakaoApi.mutation';
import { getUserMe } from '@apis/user/userApi';

import { AUTH_STATUS } from '@constants/authStatus';
import { TokenType, setToken } from '@utils/localStorage/token';
import { UserType, setUser } from '@utils/localStorage/user';

const Callback = () => {
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
          push('/home');
        }
      },
    },
  });
  useEffect(() => {
    if (code && state) mutate({ code, state });
  }, [mutate, code, state]);

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
