import { Coupon } from '@/interfaces/coupon';
import axios from '@/utils/axios';

export const getCoupons = async (): Promise<Coupon[]> => {
  const res = await axios.get('/coupons');

  return res.data;
};
