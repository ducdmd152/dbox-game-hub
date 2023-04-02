import React from "react";
import useFetchGenres from "../hooks/useFetchGenres";
import useFetchEntities from "../hooks/useFetchEntities";
import genreService, { Genre } from "../services/genre-service";
import apiClient from "../services/api-client";

const GenreList = () => {
  const { entities: genres } = useFetchEntities<Genre>(genreService);
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
