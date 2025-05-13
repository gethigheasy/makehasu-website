import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaDiscord } from 'react-icons/fa';

export const Login = () => {
  const handleDiscordLogin = () => {
    window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify%20guilds';
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8">
          <Stack spacing="6" align="center">
            <Heading size="lg">Bem-vindo ao Makehasu</Heading>
            <Text color="gray.600" textAlign="center">
              Faça login com sua conta do Discord para acessar o dashboard e gerenciar seus servidores.
            </Text>
          </Stack>

          <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={{ base: 'none', sm: 'md' }}
            borderRadius={{ base: 'none', sm: 'xl' }}
          >
            <Stack spacing="6">
              <Button
                size="lg"
                leftIcon={<FaDiscord />}
                onClick={handleDiscordLogin}
                colorScheme="purple"
                bg="purple.500"
                _hover={{ bg: 'purple.600' }}
              >
                Entrar com Discord
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
}; 