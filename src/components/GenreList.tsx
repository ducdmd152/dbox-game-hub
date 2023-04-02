import React from "react";
import useFetchGenres from "../hooks/useFetchGenres";

const GenreList = () => {
  const { genres } = useFetchGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
