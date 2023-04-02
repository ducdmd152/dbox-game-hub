import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { HttpEntity, HttpService } from "../services/http-service";
interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useFetchEntities = <E extends HttpEntity>(
  service: HttpService<E>,
  deps?: any[]
) => {
  const [entities, setEntities] = useState<E[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setIsLoading(true);

      const { request, cancel } = service.getAll<FetchResponse<E>>();

      request
        .then((response) => {
          setEntities(response.data.results);
          setIsLoading(false); // hide the loader
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false); // hide the loader
        });

      return () => cancel();
    },
    deps ? [...deps] : []
  );

  return { entities, error, isLoading };
};

export default useFetchEntities;
