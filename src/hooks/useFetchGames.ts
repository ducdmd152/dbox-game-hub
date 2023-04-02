import gameService, { Game, Platform } from "../services/game-service";
import { Genre } from "../services/genre-service";
import useFetchEntities from "./useFetchEntities";

const useFetchGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  const {
    entities: games,
    error,
    isLoading,
  } = useFetchEntities<Game>(
    gameService,
    {
      params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

  return {
    games,
    error,
    isLoading,
  };
};

export default useFetchGames;
