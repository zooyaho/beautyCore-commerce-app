import { useEffect, useState } from 'react';

import { Button, Center, Flex } from '@chakra-ui/react';

import { RightArrowIcon } from '@components/common/@Icons/MyIcons';

interface PaginationProps {
  page: number;
  getListHandler: (currentPage: number) => Promise<void>;
}

function Pagination({ page, getListHandler }: PaginationProps) {
  const [pageGroup, setPageGroup] = useState(1); // 페이지 그룹 번호 ex. 1 = 1~5, 2 = 6~10
  const [allPage, setAllPage] = useState<number[] | undefined>([]); // 전체 페이지 배열 데이터 ex. [1,2,3,4,5,6,7]
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  console.log('👾: ', page);

  useEffect(() => {
    const temp = [];
    for (let i = 1; i <= page; i++) {
      temp.push(i);
    }
    setAllPage(temp);
  }, [page]);
  return (
    <Center>
      <Flex justifyContent="center" alignItems="center" my="3rem" w="60%">
        {pageGroup > 1 && ( // 페이지 그룹 번호가 1보다 클 경우 화살표 아이콘 활성화
          <Button
            variant="transparentButton"
            onClick={() => {
              if (pageGroup > 1) setPageGroup((cur) => cur - 1);
            }}
          >
            <RightArrowIcon boxSize="10px" transform="scaleX(-1)" />
          </Button>
        )}
        {allPage &&
          allPage.map((page, index) => {
            if (page > pageGroup * 5 - 5 && page <= pageGroup * 5) {
              return (
                <Button
                  key={index}
                  variant={
                    currentPage === page ? 'activePageButton' : 'pageButton'
                  }
                  onClick={() => {
                    getListHandler(page);
                    setCurrentPage(page);
                  }}
                >
                  {page}
                </Button>
              );
            }
          })}
        {pageGroup < Math.ceil(page / 5) && ( // 페이지 그룹 번호가 마지막 번호보다 작을 경우 화살표 아이콘 활성화
          <Button
            variant="transparentButton"
            onClick={() => {
              if (pageGroup < page) setPageGroup((cur) => cur + 1);
            }}
          >
            <RightArrowIcon boxSize="10px" ml="1rem" />
          </Button>
        )}
      </Flex>
    </Center>
  );
}

export default Pagination;
