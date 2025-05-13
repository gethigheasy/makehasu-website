import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaDiscord } from 'react-icons/fa';
import { usePageTitle } from '../hooks/usePageTitle';
import { useDiscordAuth } from '../hooks/useDiscordAuth';
import { ThemeToggle } from '../components/ThemeToggle';

export const Login = () => {
  const { login } = useDiscordAuth();
  usePageTitle('Login');
  
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const boxBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={bgColor}
    >
      <ThemeToggle />
      <Box
        p={8}
        maxWidth="400px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        bg={boxBgColor}
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