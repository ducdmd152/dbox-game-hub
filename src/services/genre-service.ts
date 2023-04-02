// game-service.ts
import apiClient from "./api-client";
import createHttpService from "./http-service";

const endpoint = "genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export default createHttpService<Genre>(apiClient, endpoint);
