import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useFetchPlatforms from "../hooks/useFetchPlatforms";
import { Platform } from "../services/game-service";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { platforms, error } = useFetchPlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>

      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
