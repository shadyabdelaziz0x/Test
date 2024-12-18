import React, {useCallback, useEffect, useState} from 'react';
import ProductsScreenView from './ProductsScreenView';
import {productsService} from '../../services';
import {Product} from 'dataModels';

const ProductsScreen = () => {
  const [productList, setProductList] = useState<Array<Product>>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    try {
      productsService
        .getProducts()
        .then(products => {
          setProductList(products);
        })
        .catch(err => {
          setError(err);
        });
    } catch (errr) {
      console.error(errr);
    }
  }, []);

  const onProductLiked = useCallback((id: number) => {
    setProductList(prev =>
      prev.map(product =>
        product.id === id ? {...product, isLiked: !product.isLiked} : product,
      ),
    );
  }, []);

  return (
    <ProductsScreenView
      products={productList}
      error={error}
      onProductLiked={onProductLiked}
    />
  );
};

export default ProductsScreen;
