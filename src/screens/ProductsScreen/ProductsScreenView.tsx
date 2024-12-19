import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import {ProductScreenViewProps} from './types';
import {Product} from 'dataModels';
import {Product as ProductComponent} from '../../components';

//TODO:- show loading state
const ProductsScreenView = ({
  products,
  onProductLiked,
  error,
}: ProductScreenViewProps) => {
  const renderEmptyList = useCallback(() => {
    return (
      <View style={styles.empty}>
        <Text>Fetching Products ...</Text>
      </View>
    );
  }, []);
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
  return error ? (
    <Text>{error}</Text>
  ) : (
    <FlatList
      keyExtractor={item => `${item.id}`}
      style={styles.list}
      data={products}
      renderItem={renderProductItem}
      initialNumToRender={10}
      removeClippedSubviews={true}
      windowSize={4}
      ListEmptyComponent={renderEmptyList}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductsScreenView;
