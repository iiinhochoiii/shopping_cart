import { useQuery } from 'react-query';
import { getProducts } from '@/apis/products';
import * as queryKeys from '@/constants/queryKeys';
import { ProductsParams } from '@/interfaces/product';

const useProductsData = (params: ProductsParams) => {
  return useQuery(queryKeys.PRODUCT_DATA, () => getProducts(params), {
    refetchOnWindowFocus: true,
    staleTime: 60 * 1000,
    keepPreviousData: true,
  });
};

export default useProductsData;
