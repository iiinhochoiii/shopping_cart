import React from 'react';
import type { NextPage } from 'next';
import useProductsData from '@/hooks/queries/useProductsData';

const Products: NextPage = () => {
  const { data } = useProductsData({ page: 1, pageSize: 5, orderBy: 'desc' });

  console.log(data);
  return <div>test</div>;
};

export default Products;
4;
