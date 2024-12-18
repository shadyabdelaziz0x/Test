import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';

class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      timeout: 10000, // 10 seconds timeout
      headers: {'Content-Type': 'application/json'},
    });

    this.client.interceptors.request.use(this.handleRequest, error =>
      Promise.reject(error),
    );

    this.client.interceptors.response.use(
      this.handleResponse,
      this.handleError,
    );
  }

  private handleRequest = (
    config: InternalAxiosRequestConfig,
  ): InternalAxiosRequestConfig => {
    return config;
  };

  private handleResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
  };

  private handleError = (error: AxiosError): AxiosError => {
    return error;
  };

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.client.get(url, config).then(response => response.data);
  }

  public post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.client.post(url, data, config).then(response => response.data);
  }

  public put<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.client.put(url, data, config).then(response => response.data);
  }

  public delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.client.delete(url, config).then(response => response.data);
  }
}

export default ApiClient;
