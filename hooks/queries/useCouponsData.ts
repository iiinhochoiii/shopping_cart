import { useQuery } from 'react-query';
import { getCoupons } from '@/apis/coupons';
import * as queryKeys from '@/constants/queryKeys';

const useCouponsData = () => {
  return useQuery(queryKeys.COUPON_DATA, () => getCoupons(), {
    refetchOnWindowFocus: true,
    staleTime: 60 * 1000,
  });
};

export default useCouponsData;
