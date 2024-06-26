import React from 'react';
import Center from '@/components/ui/chakra/Center';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import Custompopover from '@/components/Input/Custompopover';
import { CiViewList, CiEdit } from 'react-icons/ci';
import { BsTrash3 } from 'react-icons/bs';

export default function RowActions(props: any) {
  const actionlist = [
    {
      isLink: true,
      icon: CiViewList,
      name: 'View Vehicle Info',
      color: '#56585A',
      path: `/vehicles/${props.row.original._id}`,
    },
    {
      isLink: true,
      icon: CiEdit,
      name: 'Edit Vehicle',
      color: '#56585A',
      path: `/vehicles/edit/${props.row.original._id}`,
    },
    {
      isLink: false,
      icon: BsTrash3,
      name: 'Delete Vehicle',
      color: '#BB1111',
      clickFn: () => {
        //Do anything with props.row.original
      },
    },
  ];
  return (
    <Custompopover actionlist={actionlist}>
      <Center
        cursor={'pointer'}
        shadow={'0px 1px 2px 0px #1018280A'}
        h={'2rem'}
        w={'2rem'}
        border="1px solid #DAE0E6"
        rounded={'.4rem'}
      >
        <HiOutlineDotsHorizontal fontSize={'1.2rem'} />
      </Center>
    </Custompopover>
  );
}
