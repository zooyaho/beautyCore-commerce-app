import { ChakraProps, Flex } from '@chakra-ui/react';

import {
  RatingHalfStarIcon,
  RatingStarIcon,
} from '@components/common/@Icons/MyIcons';

interface PrintRatingStarsProps extends ChakraProps {
  rate: number;
  starBoxSize: string;
}

function PrintRatingStars({
  rate,
  starBoxSize,
  ...basisProps
}: PrintRatingStarsProps) {
  return (
    <Flex {...basisProps}>
      {[1, 2, 3, 4, 5].map((item) => {
        if (rate - (item - 1) === 0.5) {
          return (
            <RatingHalfStarIcon
              key={item}
              boxSize={starBoxSize}
              color="primary.500"
            />
          );
        } else if (item <= rate) {
          return (
            <RatingStarIcon
              key={item}
              boxSize={starBoxSize}
              color="primary.500"
            />
          );
        } else {
          return (
            <RatingStarIcon key={item} boxSize={starBoxSize} color="gray.400" />
          );
        }
      })}
    </Flex>
  );
}

export default PrintRatingStars;
