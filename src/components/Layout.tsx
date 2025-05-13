import { Box, Container, Flex, Button, IconButton, useColorModeValue } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const headerBg = useColorModeValue('gray.50', 'gray.900');
  const footerBg = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Box as="header" py={4} borderBottom="1px" borderColor={borderColor} bg={headerBg}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <RouterLink to="/">
              <Box fontSize="2xl" fontWeight="bold" color="purple.500">
                Makehasu
              </Box>
            </RouterLink>
            <Flex gap={4} align="center">
              <RouterLink to="/features">
                <Button variant="ghost">Recursos</Button>
              </RouterLink>
              <RouterLink to="/commands">
                <Button variant="ghost">Comandos</Button>
              </RouterLink>
              <RouterLink to="/dashboard">
                <Button colorScheme="purple">Dashboard</Button>
              </RouterLink>
              <IconButton
                aria-label="Toggle color mode"
                onClick={toggleColorMode}
                variant="ghost"
              >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </IconButton>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Box flex="1">
        {children}
      </Box>

      <Box as="footer" py={8} bg={footerBg}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Box>
              <Box fontSize="xl" fontWeight="bold" color="purple.500">
                Makehasu
              </Box>
              <Box color="gray.500">Seu bot Discord favorito</Box>
            </Box>
            <Flex gap={8}>
              <Box>
                <Box fontWeight="bold" mb={2}>Links</Box>
                <Flex direction="column" gap={2}>
                  <RouterLink to="/features">Recursos</RouterLink>
                  <RouterLink to="/commands">Comandos</RouterLink>
                  <RouterLink to="/dashboard">Dashboard</RouterLink>
                </Flex>
              </Box>
              <Box>
                <Box fontWeight="bold" mb={2}>Social</Box>
                <Flex direction="column" gap={2}>
                  <a href="https://discord.gg/emphasis" target="_blank" rel="noopener noreferrer">Discord</a>
                  <a href="https://github.com/makehasu" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}; 