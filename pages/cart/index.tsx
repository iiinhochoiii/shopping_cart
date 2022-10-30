import React from 'react';
import type { NextPage } from 'next';
import LayoutComponent from '@/components/Layout';
import dynamic from 'next/dynamic';
const CartComponent = dynamic(() => import('@/components/Cart'), {
  ssr: false,
});

const Cart: NextPage = () => {
  return (
    <LayoutComponent>
      <CartComponent />
    </LayoutComponent>
  );
};

export default Cart;
