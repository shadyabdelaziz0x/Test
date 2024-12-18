import {Product} from 'dataModels';

export interface ProductScreenViewProps {
  products: Array<Product>;
  error?: string;
  loading?: boolean;
  onProductLiked: (id: number) => void;
}
