import React from 'react';
import { Box, ChakraProps, Flex, Image, Center } from '@chakra-ui/react';
import SocialButton, { SocialType } from '@components/common/SocialButton';
import { MY_IMAGES } from '@image';

import { CONFIG } from '@config';
import { SOCIAL } from '@constants/social';

interface IntroLoginPageProps extends ChakraProps {
}

const SOCIAL_REDIRECT_URL = `${CONFIG.DOMAIN}`;

const SOCAIL_KAKAO: { social: SocialType; link: string } = {
  social: 'kakao',
  link: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${SOCIAL.KAKAO_CLIENT_ID}&redirect_uri=${SOCIAL_REDIRECT_URL}&state=kakao`,
};


function IntroLoginPage({ ...basisProps }: IntroLoginPageProps) {
  return (
    <Flex flexDirection="column" w="100%" h="100vh" bg="primary.500" alignItems="center">
      <Box mt="45vh">
        <Image src={MY_IMAGES.ICONS.INTRO_LOGO.src} alt={MY_IMAGES.ICONS.LOGO.alt}></Image>
      </Box>
      <Flex mt="38vh" alignItems="center" justifyContent="center" w="100%">
        <SocialButton key={SOCAIL_KAKAO.social} data={SOCAIL_KAKAO} size="md" />
      </Flex>
    </Flex>
  );
}

export default IntroLoginPage;
