import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Box, Center, CircularProgress, Flex, Img } from '@chakra-ui/react';

import { usePostKakaoMutation } from '@apis/login/KakaoApi.mutation';
import { userSliceActions } from '@features/user/userSlice';

import { TokenType, setToken } from '@utils/localStorage/token';

const Callback = () => {
  console.log('callbkck page');
  const {
    push,
    query: { code, state },
  } = useRouter();
  const dispatch = useDispatch();

  const { mutate } = usePostKakaoMutation({
    options: {
      onSuccess: (data) => {
        if (!data.isRegister && data.socialToken) {
          push({ pathname: '/sign-up', query: { token: data.socialToken } });
        } else if (data.access && data.refresh) {
          setToken(data as TokenType);
          dispatch(userSliceActions.setIsLogged(true));
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
