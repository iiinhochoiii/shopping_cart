import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import LayoutComponent from '@/components/Layout';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/products');
  }, []);

  return <LayoutComponent>home</LayoutComponent>;
};

export default Home;
4;
