import { useRouter } from 'next/router';

import { Box } from '@chakra-ui/react';

const Callback = () => {
  const router = useRouter();
  const code = router.query.code;
  const state = router.query.state;
  return <Box>CallBack</Box>;
};

export default Callback;
