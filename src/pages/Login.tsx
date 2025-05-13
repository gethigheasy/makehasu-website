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
import { Layout } from '../components/Layout';

export const Login = () => {
  const { login } = useDiscordAuth();
  usePageTitle('Login');
  
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const boxBgColor = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.900', 'white');
  const subTextColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Layout>
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg={bgColor}
      >
        <Box
          p={8}
          maxWidth="400px"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          bg={boxBgColor}
        >
          <VStack spacing={4}>
            <Heading color={headingColor}>Login</Heading>
            <Text color={subTextColor}>Faça login com sua conta do Discord para continuar</Text>
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
    </Layout>
  );
}; 