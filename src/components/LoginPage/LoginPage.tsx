import React from 'react';

import { MY_IMAGES } from '@image';

import { CONFIG } from '@config';

import { Box, Flex, Image } from '@chakra-ui/react';

import SocialButton, { SocialType } from '@components/common/SocialButton';

const REST_API_URL = `${CONFIG.KAKAO_REST_API_KEY}`;
const SOCIAL_REDIRECT_URL = `${CONFIG.KAKAO_REDIRECT_URI}`;

const SOCAIL_KAKAO: { social: SocialType; link: string } = {
  social: 'kakao',
  link: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_URL}&redirect_uri=${SOCIAL_REDIRECT_URL}&state=kakao`,
};

function LoginPage() {
  return (
    <Flex
      flexDirection="column"
      w="100%"
      h="100vh"
      bg="primary.500"
      alignItems="center"
    >
      <Box mt="45vh">
        <Image
          src={MY_IMAGES.IMAGES.INTRO_LOGO.src}
          alt={MY_IMAGES.IMAGES.LOGO.alt}
        />
      </Box>
      <Flex mt="38vh" alignItems="center" justifyContent="center" w="100%">
        <SocialButton key={SOCAIL_KAKAO.social} data={SOCAIL_KAKAO} size="md" />
      </Flex>
    </Flex>
  );
}

export default LoginPage;
