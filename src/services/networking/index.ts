import {API_BASE_URL} from '../../utils/constants';
import ApiClient from './apiClient';
import ProductsService from './productsService';

const apiClient = new ApiClient(API_BASE_URL);

export const productsService = new ProductsService(apiClient);
