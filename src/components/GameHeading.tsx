import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery: { genre, platform } }: Props) => {
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`.trim();

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
