export interface ProductProps {
  id: number;
  title: string;
  imageUrl?: string;
  price: number;
  isLiked?: boolean;
  onLike: (productId: number) => void;
}
