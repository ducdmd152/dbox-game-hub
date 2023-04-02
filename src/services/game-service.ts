// game-service.ts
import apiClient from "./api-client";
import createHttpService from "./http-service";

const endpoint = "games";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

export default createHttpService<Game>(apiClient, endpoint);
