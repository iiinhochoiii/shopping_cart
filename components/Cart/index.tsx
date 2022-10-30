import React from 'react';
import * as S from './style';
import { Cart } from '@/interfaces/product';
import Checkbox from '../Common/Checkbox';
import useCartStore from '@/stores/useCartStore';
import CouponModal from './CouponModal';
import Button from '../Common/Button';
import EmptyCart from './EmptyCart';
import CartCard from './Card';
import CartPaymentComponent from './Payment';

const CartComponent = () => {
  const { carts, onAllChnageCheckbox, removeCart } = useCartStore();

  const deleteCartHandler = () => {
    const checkedCarts = carts.filter((cart) => cart.isChecked);

    if (checkedCarts.length > 0) {
      if (confirm('선택하신 상품을 장바구니에서 제거 하시겠습니까?')) {
        removeCart(checkedCarts.map((cart) => cart.item_no));
      }
    } else {
      alert('삭제할 상품을 선택해주세요.');
    }
  };

  if (carts.length === 0) {
    return <EmptyCart />;
  }

  return (
    <S.Container>
      <S.CartContent>
        <S.ContentHeader>
          <div className="table-title checkbox">
            <Checkbox
              isChecked={carts.filter((item) => !item.isChecked).length === 0}
              onChangeHandler={() => onAllChnageCheckbox()}
            />
          </div>
          <div className="table-title product-info">상품정보</div>
          <div className="table-title quantity">수량</div>
          <div className="table-title price">주문금액</div>
          <div className="table-title delivery-fee">배송비</div>
        </S.ContentHeader>
        {carts.map((item: Cart) => (
          <CartCard key={item.item_no} cart={item} />
        ))}
      </S.CartContent>
      <S.ButtonWrap>
        <CouponModal />
        <Button onClick={() => deleteCartHandler()}>선택상품 삭제</Button>
      </S.ButtonWrap>

      <CartPaymentComponent />
      <S.ButtonWrap>
        <Button
          className="buy-btn"
          onClick={() => {
            if (confirm('구매하시겠습니까?')) {
              const checkedCarts = carts.filter((cart) => cart.isChecked);
              removeCart(checkedCarts.map((cart) => cart.item_no));
            }
          }}
        >
          구매하기
        </Button>
      </S.ButtonWrap>
    </S.Container>
  );
};

export default CartComponent;
