import {Product} from 'dataModels';
import ApiClient from './apiClient';

class ProductsService {
  private api: ApiClient;

  constructor(api: ApiClient) {
    this.api = api;
  }

  public getProducts() {
    return this.api.get<Array<Product>>('');
  }
}

export default ProductsService;
