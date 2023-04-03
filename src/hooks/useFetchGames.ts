import { GameQuery } from "../App";
import gameService, { Game, Platform } from "../services/game-service";
import { Genre } from "../services/genre-service";
import useFetchEntities from "./useFetchEntities";

const useFetchGames = (gameQuery: GameQuery) => {
  const {
    entities: games,
    error,
    isLoading,
  } = useFetchEntities<Game>(
    gameService,
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

  return {
    games,
    error,
    isLoading,
  };
};

export default useFetchGames;
