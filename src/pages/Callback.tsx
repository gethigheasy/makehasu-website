import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDiscordAuth } from '../hooks/useDiscordAuth';
import { Box, Spinner, Text } from '@chakra-ui/react';
import { usePageTitle } from '../hooks/usePageTitle';

export const Callback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { handleCallback, error } = useDiscordAuth();
  usePageTitle('Autenticando');

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
      <Box textAlign="center" mt={8}>
        <Text color="red.500">Erro: {error}</Text>
      </Box>
    );
  }

  return (
    <Box textAlign="center" mt={8}>
      <Spinner size="xl" />
      <Text mt={4}>Autenticando...</Text>
    </Box>
  );
}; 