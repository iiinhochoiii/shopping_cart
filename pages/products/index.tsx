import React from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import LayoutComponent from '@/components/Layout';
import ProductComponent from '@/components/Product';

interface Props {
  page: number;
}
const Products: NextPage<Props> = (props: Props) => {
  return (
    <LayoutComponent>
      <ProductComponent page={props.page} />
    </LayoutComponent>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx;

  return {
    props: {
      page: Number(query.page) || 1,
    },
  };
};
export default Products;
