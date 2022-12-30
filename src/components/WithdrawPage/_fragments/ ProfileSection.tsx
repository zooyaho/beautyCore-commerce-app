import {
  Center,
  CircularProgress,
  Container,
  Divider,
  Flex,
  Text,
} from '@chakra-ui/react';

import { useGetUserMe } from '@apis/user/userApi.query';

import { LAYOUT } from '@constants/layout';

function ProfileSection() {
  const { data: userData, isLoading } = useGetUserMe();

  return (
    <Container borderBottom="solid 10px #F9F9F9">
      {isLoading || !userData ? (
        <>
          <Center pt={LAYOUT.HEADER.HEIGHT} minH="80vh">
            <CircularProgress isIndeterminate color="primary.500" />
          </Center>
        </>
      ) : (
        <>
          <Text as="h3" py=".8rem" textStyle="sm_wb">
            회원 정보
          </Text>
          <Divider />
          <Flex flexDirection="column" gap=".7rem" my="1rem">
            <Flex>
              <Text minW="30%">이름</Text>
              <Text textColor="gray.700">{userData.name}</Text>
            </Flex>
            <Flex>
              <Text minW="30%">핸드폰 번호</Text>
              <Text textColor="gray.700">{userData.phone}</Text>
            </Flex>
            <Flex>
              <Text minW="30%">이메일 주소</Text>
              <Text textColor="gray.700">{userData?.email}</Text>
            </Flex>
          </Flex>
        </>
      )}
    </Container>
  );
}

export default ProfileSection;
