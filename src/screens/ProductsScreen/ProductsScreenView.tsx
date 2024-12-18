import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {ProductScreenViewProps} from './types';
import {Product} from 'dataModels';
import {Product as ProductComponent} from '../../components';

const ProductsScreenView = ({
  products,
  onProductLiked,
}: ProductScreenViewProps) => {
  const renderProductItem: ListRenderItem<Product> = useCallback(
    ({item: product}) => {
      return (
        <ProductComponent
          id={product.id}
          key={product.id}
          title={product.title}
          imageUrl={product.image}
          price={product.price}
          isLiked={product.isLiked}
          onLike={onProductLiked}
        />
      );
    },
    [onProductLiked],
  );
  return (
    <FlatList
      style={styles.list}
      data={products}
      renderItem={renderProductItem}
      initialNumToRender={10}
      removeClippedSubviews={true}
      windowSize={4}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default ProductsScreenView;
