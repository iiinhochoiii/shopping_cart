import React from 'react';
import type { NextPage } from 'next';
import LayoutComponent from '@/components/Layout';
import ProductComponent from '@/components/Product';

const Products: NextPage = () => {
  return (
    <LayoutComponent>
      <ProductComponent />
    </LayoutComponent>
  );
};

export default Products;
