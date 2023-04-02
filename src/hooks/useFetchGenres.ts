import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import genreService, { Genre } from "../services/genre-service";
interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useFetchGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const { request, cancel } = genreService.getAll<FetchGenreResponse>();
    setIsLoading(true);

    request
      .then((response) => {
        setGenres(response.data.results);
        setIsLoading(false); // hide the loader
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false); // hide the loader
      });

    return () => cancel();
  }, []);

  return { genres, error, isLoading };
};

export default useFetchGenres;
