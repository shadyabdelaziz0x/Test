interface Rating {
  rate?: number | null;
  count?: number | null;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string | null;
  category?: string | null;
  image?: string;
  rating?: Rating | null;
  isLiked?: boolean;
}
