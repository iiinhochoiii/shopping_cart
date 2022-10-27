import React from 'react';
import * as S from './style';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const headerItems = [
    { id: 1, name: '상품', route: '/products' },
    { id: 2, name: '장바구니', route: '/cart' },
  ];

  return (
    <S.HeaderContainer>
      <S.Content>
        {headerItems.map((item) => (
          <li
            key={item.id}
            className={item.route === router.route ? 'isRouted' : ''}
          >
            <Link href={item.route}>{item.name}</Link>
          </li>
        ))}
      </S.Content>
    </S.HeaderContainer>
  );
};

export default Header;
