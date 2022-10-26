import type { NextApiRequest, NextApiResponse } from 'next';
import { productItems } from '@/datas/productItems';
import { Product } from '@/interfaces/product';

const productItemsApi = (
  req: NextApiRequest,
  res: NextApiResponse<{
    items: Product[];
    total: number;
  }>
) => {
  const {
    query: { page = 1, pageSize = 5, orderBy = 'desc' },
  } = req;

  const products = productItems
    .sort((a, b) => {
      if (orderBy === 'desc') {
        return b.score - a.score;
      } else if (orderBy === 'asc') {
        return a.score - b.score;
      } else {
        return 0;
      }
    })
    .filter((_, index) => {
      const endIndex = Number(page) * Number(pageSize) - 1;
      const startIndex = endIndex - (Number(pageSize) - 1);

      return index >= startIndex && index <= endIndex;
    });

  return res.status(200).json({ items: products, total: productItems.length });
};

export default productItemsApi;
