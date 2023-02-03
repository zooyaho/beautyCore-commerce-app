import React from 'react';

import { CONFIG } from '@config';

import { HStack, VStack } from '@chakra-ui/react';

import SocialButton, { SocialType } from '@components/common/SocialButton';

import { SOCIAL } from '@constants/social';

const SOCIAL_REDIRECT_URI = `${CONFIG.KAKAO_REDIRECT_URI}`;

const SOCIAL_LIST: Array<{ social: SocialType; link: string }> = [
  {
    social: 'kakao',
    link: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${SOCIAL.KAKAO_CLIENT_ID}&redirect_uri=${SOCIAL_REDIRECT_URI}&state=kakao`,
  },
];

function SocialPage() {
  return (
    <>
      <VStack mt="150px">
        {SOCIAL_LIST.map((social) => {
          return <SocialButton key={social.social} data={social} size="md" />;
        })}
      </VStack>
      <HStack justifyContent="center" mt="80px">
        {SOCIAL_LIST.map((social) => {
          return <SocialButton key={social.social} data={social} size="sm" />;
        })}
      </HStack>
    </>
  );
}

export default SocialPage;
