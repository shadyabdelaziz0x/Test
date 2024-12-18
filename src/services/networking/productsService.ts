import ApiClient from './apiClient';

class ProductsService {
  private api: ApiClient;

  constructor(api: ApiClient) {
    this.api = api;
  }

  public getProducts(query: string) {
    return this.api.get(`/?q=${query}`);
  }

  public getMovie(movieId: string) {
    return this.api.get(`/?tt=${movieId}`);
  }
}

export default ProductsService;
