import {
  HStack,
  List,
  ListItem,
  Text,
  Image,
  Spinner,
  Button,
  Heading,
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
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius="8"
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
