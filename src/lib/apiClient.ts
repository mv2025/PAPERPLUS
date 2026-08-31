type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface ApiOptions extends RequestInit {
  params?: Record<string, string | number | boolean>;
}

/**
 * Base API Client
 * Currently configured to simulate network delays for mock data development.
 * Future migration: Simply replace this logic with actual fetch/axios calls to your backend URL.
 */
class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
  }

  // Helper to simulate network latency for mock mode
  private async simulateLatency<T>(data: T, ms = 500): Promise<T> {
    return new Promise(resolve => setTimeout(() => resolve(data), ms));
  }

  private buildUrl(endpoint: string, params?: Record<string, string | number | boolean>) {
    const url = new URL(endpoint, window.location.origin);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          url.searchParams.append(key, String(value));
        }
      });
    }
    return url.toString();
  }

  async get<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
    // For MOCK mode, we will just throw an error if used directly without mock interception,
    // but in our mock services we won't call this directly until backend is ready.
    // Wait, to make this truly drop-in, services would call apiClient.get('/products')
    // We can simulate an in-memory router here if we want, but it's better to just structure it.
    console.log(`[API MOCK GET] ${endpoint}`);
    throw new Error('Real API not yet implemented. Use Service Layer mock bypass.');
  }

  async post<T>(endpoint: string, data: any, options: ApiOptions = {}): Promise<T> {
    console.log(`[API MOCK POST] ${endpoint}`, data);
    throw new Error('Real API not yet implemented. Use Service Layer mock bypass.');
  }

  async put<T>(endpoint: string, data: any, options: ApiOptions = {}): Promise<T> {
    console.log(`[API MOCK PUT] ${endpoint}`, data);
    throw new Error('Real API not yet implemented. Use Service Layer mock bypass.');
  }

  async delete<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
    console.log(`[API MOCK DELETE] ${endpoint}`);
    throw new Error('Real API not yet implemented. Use Service Layer mock bypass.');
  }

  async upload<T>(endpoint: string, file: File, onProgress?: (progress: number) => void): Promise<T> {
    console.log(`[API MOCK UPLOAD] ${endpoint}`, file.name);
    throw new Error('Real API not yet implemented.');
  }
}

export const apiClient = new ApiClient();
