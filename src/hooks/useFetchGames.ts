import { useEffect, useState } from "react";
import gameService, { Game } from "../services/game-service";
import { CanceledError } from "axios";
interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useFetchGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const { request, cancel } = gameService.getAll<FetchGameResponse>();
    setIsLoading(true);

    request
      .then((response) => {
        setGames(response.data.results);
        setIsLoading(false); // hide the loader
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false); // hide the loader
      });

    return () => cancel();
  }, []);

  return { games, error, isLoading };
};

export default useFetchGames;
