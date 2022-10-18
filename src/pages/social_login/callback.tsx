import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Box } from '@chakra-ui/react';

import { usePostKakaoMutation } from '@apis/login/KakaoApi.mutation';
import { useGetUserMe } from '@apis/user/userApi.query';
import { userSliceActions } from '@features/user/userSlice';

import { TokenType, setToken } from '@utils/localStorage/token';

const Callback = () => {
  console.log('callbkck page');
  const {
    push,
    query: { code, state },
  } = useRouter();
  const { data: userData } = useGetUserMe();
  const dispatch = useDispatch();

  if (userData) dispatch(userSliceActions.setUserId(userData.id));
  dispatch(userSliceActions.setIsLogged(true));

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
