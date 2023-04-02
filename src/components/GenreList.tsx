import { HStack, List, ListItem, Text, Image } from "@chakra-ui/react";
import useFetchEntities from "../hooks/useFetchEntities";
import genreService, { Genre } from "../services/genre-service";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { entities: genres } = useFetchEntities<Genre>(genreService);
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
