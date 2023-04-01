import { AxiosInstance } from "axios";
interface Entity {
  id: number;
}

class HttpService<T extends Entity> {
  apiClient: AxiosInstance;
  endpoint: string;

  constructor(apiClient: AxiosInstance, endpoint: string) {
    this.apiClient = apiClient;
    this.endpoint = endpoint;
  }
  getAll<FetchResponse>() {
    const controller = new AbortController();
    const request = this.apiClient.get<FetchResponse>(this.endpoint, {
      signal: controller.signal,
    });

    const cancel = () => controller.abort();

    return { request, cancel };
  }

  get(id: number) {
    return this.apiClient.get(this.endpoint + "/" + id);
  }

  create(entity: T) {
    return this.apiClient.post(this.endpoint, entity);
  }

  update(entity: T) {
    return this.apiClient.patch(this.endpoint + "/" + entity.id, entity);
  }

  delete(entity: T) {
    return this.apiClient.delete(this.endpoint + "/" + entity.id);
  }
}

const createHttpService = <T extends Entity>(
  apiClient: AxiosInstance,
  endpoint: string
) => new HttpService<T>(apiClient, endpoint);

export default createHttpService;
