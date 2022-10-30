import { Cart } from '@/interfaces/product';
import { Coupon } from '@/interfaces/coupon';

export const couponPrice = (cart: Cart, couponData?: Coupon) => {
  let price = 0;

  if (cart.availableCoupon === false) {
    price = cart.price;
  } else {
    if (couponData) {
      if (couponData.type === 'rate') {
        price = cart.price - cart.price / Number(couponData.discountRate);
      } else if (couponData.type === 'amount') {
        price = cart.price - Number(couponData.discountAmount);
      }
    } else {
      price = cart.price;
    }
  }

  return price;
};
