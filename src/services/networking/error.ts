import {AxiosError} from 'axios';

export const handleApiError = (error: AxiosError): string => {
  const status = error?.response?.status;
  const message = error?.message || 'Unknown error occurred';

  switch (status) {
    case 400:
      return `Bad Request: ${message}`;
    case 401:
      return 'Unauthorized: Please log in again.';
    case 403:
      return 'Forbidden: Access denied.';
    case 404:
      return 'Not Found: Resource does not exist.';
    case 500:
      return `Server Error: Please try again later.\n${message}`;
    case 502:
      return `Bad Gateway: Server issue.\n${message}`;
    default:
      return `Error: ${message}`;
  }
};
