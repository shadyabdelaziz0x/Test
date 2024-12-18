import React, {useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ProductProps} from './types';
import ProgressImage from '../ProgressImage';

const Product = ({
  id,
  imageUrl,
  title,
  price,
  onLike,
  isLiked,
}: ProductProps) => {
  const onProductLiked = useCallback(() => {
    onLike(id);
  }, [id, onLike]);

  return (
    <View style={styles.container}>
      <ProgressImage style={styles.image} src={imageUrl} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <TouchableOpacity
        style={!isLiked ? styles.likeBtn : styles.likeBtn}
        onPress={onProductLiked}>
        <Text style={isLiked && styles.likedText}>
          {isLiked ? 'Liked' : 'like'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  likeBtn: {
    backgroundColor: 'silver',
    padding: 10,
  },
  likedBtn: {
    backgroundColor: 'green',
    padding: 10,
  },
  likedText: {
    color: 'white',
  },
});

export default Product;
