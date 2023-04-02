import gameService, { Game } from "../services/game-service";
import { Genre } from "../services/genre-service";
import platformService from "../services/platform-service";
import useFetchEntities from "./useFetchEntities";

const useFetchPlatforms = () => {
  const {
    entities: platforms,
    error,
    isLoading,
  } = useFetchEntities<Genre>(platformService);

  return {
    platforms,
    error,
    isLoading,
  };
};

export default useFetchPlatforms;
