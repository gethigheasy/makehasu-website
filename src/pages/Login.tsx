import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { FaDiscord } from 'react-icons/fa';
import { usePageTitle } from '../hooks/usePageTitle';
import { useDiscordAuth } from '../hooks/useDiscordAuth';

export const Login = () => {
  const { login } = useDiscordAuth();
  usePageTitle('Login');

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
    >
      <Box
        p={8}
        maxWidth="400px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        bg="white"
      >
        <VStack spacing={4}>
          <Heading>Login</Heading>
          <Text>Faça login com sua conta do Discord para continuar</Text>
          <Button
            leftIcon={<FaDiscord />}
            colorScheme="blue"
            size="lg"
            width="full"
            onClick={login}
          >
            Entrar com Discord
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}; 