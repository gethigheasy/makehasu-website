import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<FaMoon />, <FaSun />);

  return (
    <IconButton
      aria-label="Alternar tema"
      icon={icon}
      onClick={toggleColorMode}
      position="fixed"
      top={4}
      right={4}
      colorScheme="purple"
      variant="ghost"
      size="lg"
    />
  );
}; 