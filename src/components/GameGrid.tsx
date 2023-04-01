import React, { useEffect, useState } from "react";
import gameService, { Game } from "../services/game-service";
import { Text } from "@chakra-ui/react";

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request, cancel } = gameService.getAll<FetchGameResponse>();
    request
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
