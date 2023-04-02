import useFetchGames from "../hooks/useFetchGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import gameService, { Game } from "../services/game-service";
import useFetchEntities from "../hooks/useFetchEntities";

const GameGrid = () => {
  const {
    entities: games,
    error,
    isLoading,
  } = useFetchEntities<Game>(gameService);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const;

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
