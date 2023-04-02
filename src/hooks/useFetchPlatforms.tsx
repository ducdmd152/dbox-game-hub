import gameService, { Game, Platform } from "../services/game-service";
import { Genre } from "../services/genre-service";
import platformService from "../services/platform-service";
import useFetchEntities from "./useFetchEntities";

const useFetchPlatforms = () => {
  const {
    entities: platforms,
    error,
    isLoading,
  } = useFetchEntities<Platform>(platformService);

  return {
    platforms,
    error,
    isLoading,
  };
};

export default useFetchPlatforms;
