import {
  HStack,
  List,
  ListItem,
  Text,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useFetchEntities from "../hooks/useFetchEntities";
import genreService, { Genre } from "../services/genre-service";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const {
    entities: genres,
    isLoading,
    error,
  } = useFetchEntities<Genre>(genreService);

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="8"
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
