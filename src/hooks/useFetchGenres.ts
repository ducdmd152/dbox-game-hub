import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import genreService, { Genre } from "../services/genre-service";
import genres from "../data/genres";

const useFetchGenres = () => ({
  genres: genres,
  isLoading: false,
  error: null,
});
export default useFetchGenres;
