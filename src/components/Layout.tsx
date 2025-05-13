import { Box, Container, Flex, Button, IconButton, useColorModeValue, HStack, chakra } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const GradientText = chakra('span', {
  baseStyle: {
    bgGradient: 'linear(to-r, purple.400, pink.400, blue.400)',
    bgClip: 'text',
    fontWeight: 'extrabold',
  },
});

export const Layout = ({ children }: LayoutProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const headerBg = useColorModeValue('whiteAlpha.900', 'gray.900');
  const borderColor = useColorModeValue('purple.100', 'purple.900');
  const footerBg = useColorModeValue('whiteAlpha.900', 'gray.900');
  const location = useLocation();

  return (
    <Box minH="100vh" display="flex" flexDirection="column" bgGradient={useColorModeValue('linear(to-b, white, purple.50)', 'linear(to-b, gray.900, purple.900)')}>
      <Box as="header" py={4} borderBottom="2px" borderColor={borderColor} bg={headerBg} boxShadow="sm">
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <RouterLink to="/">
              <Box fontSize="2xl" fontWeight="bold">
                <GradientText>Makehasu</GradientText>
              </Box>
            </RouterLink>
            <HStack gap={2} align="center">
              <RouterLink to="/features">
                <Button variant={location.pathname === '/features' ? 'solid' : 'ghost'} colorScheme="purple">Recursos</Button>
              </RouterLink>
              <RouterLink to="/commands">
                <Button variant={location.pathname === '/commands' ? 'solid' : 'ghost'} colorScheme="purple">Comandos</Button>
              </RouterLink>
              <RouterLink to="/dashboard">
                <Button variant={location.pathname === '/dashboard' ? 'solid' : 'outline'} colorScheme="purple">Dashboard</Button>
              </RouterLink>
              <IconButton
                aria-label="Alternar tema"
                onClick={toggleColorMode}
                variant="ghost"
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} />
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Box flex="1">
        {children}
      </Box>

      <Box as="footer" py={10} bg={footerBg} borderTop="2px" borderColor={borderColor} mt={8}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center" flexWrap="wrap" gap={4}>
            <Box>
              <Box fontSize="xl" fontWeight="bold">
                <GradientText>Makehasu</GradientText>
              </Box>
              <Box color={useColorModeValue('gray.500', 'gray.400')}>Seu bot Discord favorito</Box>
            </Box>
            <HStack gap={8} flexWrap="wrap">
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
                  <a href="https://discord.gg/makehasu" target="_blank" rel="noopener noreferrer">Discord</a>
                  <a href="https://github.com/makehasu" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Flex>
              </Box>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}; 