import { useEffect, useState } from "react";
import gameService, { Game } from "../services/game-service";
import { CanceledError } from "axios";
import useFetchEntities from "./useFetchEntities";
import { Genre } from "../services/genre-service";

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
