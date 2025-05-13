import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDiscordAuth } from '../hooks/useDiscordAuth';
import { Box, Spinner, Text, useColorModeValue } from '@chakra-ui/react';
import { usePageTitle } from '../hooks/usePageTitle';
import { Layout } from '../components/Layout';

export const Callback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { handleCallback, error } = useDiscordAuth();
  usePageTitle('Autenticando');
  const textColor = useColorModeValue('gray.800', 'white');
  const errorColor = useColorModeValue('red.500', 'red.300');

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      handleCallback(code).then(() => {
        navigate('/dashboard');
      });
    } else {
      navigate('/');
    }
  }, [searchParams, handleCallback, navigate]);

  if (error) {
    return (
      <Layout>
        <Box textAlign="center" mt={8}>
          <Text color={errorColor}>Erro: {error}</Text>
        </Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box textAlign="center" mt={8}>
        <Spinner size="xl" />
        <Text mt={4} color={textColor}>Autenticando...</Text>
      </Box>
    </Layout>
  );
}; 