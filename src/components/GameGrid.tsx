import { SimpleGrid, Text } from "@chakra-ui/react";
import useFetchGames from "../hooks/useFetchGames";
import { Platform } from "../services/game-service";
import { Genre } from "../services/genre-service";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
  // put related state into a single
}

const GameGrid = ({ gameQuery }: Props) => {
  const { games, error, isLoading } = useFetchGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {games.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
