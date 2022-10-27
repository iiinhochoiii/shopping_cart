import React from 'react';
import type { NextPage } from 'next';
import LayoutComponent from '@/components/Layout';
import CartComponent from '@/components/Cart';

const Cart: NextPage = () => {
  return (
    <LayoutComponent>
      <CartComponent />
    </LayoutComponent>
  );
};

export default Cart;
