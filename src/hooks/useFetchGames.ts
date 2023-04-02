import gameService, { Game } from "../services/game-service";
import { Genre } from "../services/genre-service";
import useFetchEntities from "./useFetchEntities";

const useFetchGames = (selectedGenre: Genre | null) => {
  const {
    entities: games,
    error,
    isLoading,
  } = useFetchEntities<Game>(
    gameService,
    {
      params: { genres: selectedGenre?.id },
    },
    [selectedGenre]
  );

  return {
    games,
    error,
    isLoading,
  };
};

export default useFetchGames;
