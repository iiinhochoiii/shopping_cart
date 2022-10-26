import { useQuery } from 'react-query';
import { getProducts } from '@/apis/products';
import * as queryKeys from '@/constants/queryKeys';
import { ProductsParams } from '@/interfaces/product';

const useProductsData = (params: ProductsParams) => {
  return useQuery(queryKeys.PRODUCT_DATA, () => getProducts(params));
};

export default useProductsData;
