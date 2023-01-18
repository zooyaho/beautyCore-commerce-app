import { useCallback } from 'react';

import { RatingStarIcon } from '@components/common/@Icons/MyIcons';

interface IProps {
  rate: number;
  value: number;
  onChange: (v: number) => void;
}

function InputRatingStars({ rate, value, onChange }: IProps) {
  const onClickIcon = useCallback(() => {
    onChange(rate);
  }, [onChange, rate]);

  return (
    <RatingStarIcon
      boxSize="32px"
      m="6px"
      color={rate <= value ? 'primary.500' : 'gray.400'}
      cursor="pointer"
      onClick={onClickIcon}
    />
  );
}

export default InputRatingStars;
