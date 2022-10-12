import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Box } from '@chakra-ui/react';

import { usePostKakaoMutation } from '@apis/login/KakaoApi.mutation';

const Callback = () => {
  const {
    query: { code, state },
  } = useRouter();

  const { mutate, data } = usePostKakaoMutation();
  useEffect(() => {
    mutate({ code, state });
  }, [mutate, code, state]);

  return <Box>Callback</Box>;
};

export default Callback;
