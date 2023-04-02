// game-service.ts
import apiClient from "./api-client";
import createHttpService from "./http-service";

const endpoint = "platforms/lists/parents";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default createHttpService<Platform>(apiClient, endpoint);
