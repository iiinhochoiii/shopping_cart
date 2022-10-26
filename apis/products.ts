import axios from '@/utils/axios';
import { ResponseProducts, ProductsParams } from '@/interfaces/product';

export const getProducts = async (
  params: ProductsParams
): Promise<ResponseProducts> => {
  const res = await axios.get('/productItems', {
    params,
  });

  return res.data;
};
