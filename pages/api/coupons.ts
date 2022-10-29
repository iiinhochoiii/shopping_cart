import type { NextApiRequest, NextApiResponse } from 'next';
import { coupons } from '@/datas/coupons';
import { Coupon } from '@/interfaces/coupon';

const couponItemsApi = (
  req: NextApiRequest,
  res: NextApiResponse<Coupon[]>
) => {
  return res.status(200).json(coupons);
};

export default couponItemsApi;
