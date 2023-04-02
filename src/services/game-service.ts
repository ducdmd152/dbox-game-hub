// game-service.ts
import apiClient from "./api-client";
import createHttpService from "./http-service";

const endpoint = "games";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

export default createHttpService<Game>(apiClient, endpoint);
