import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDiscordAuth } from '../hooks/useDiscordAuth';
import { usePageTitle } from '../hooks/usePageTitle';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Avatar,
  VStack,
  HStack,
  Badge,
  Tooltip,
  useClipboard,
  Image,
  Center,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Layout } from '../components/Layout';

export const Dashboard = () => {
  const { user, loading, logout } = useDiscordAuth();
  const navigate = useNavigate();
  const { onCopy, hasCopied } = useClipboard(user?.id || '');
  usePageTitle('Dashboard');
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.900', 'white');
  const textColor = useColorModeValue('gray.800', 'white');
  const subTextColor = useColorModeValue('gray.600', 'gray.300');

  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <Center minH="100vh">
        <Text fontSize="xl">Carregando...</Text>
      </Center>
    );
  }

  if (!user) {
    return null;
  }

  // Função para mostrar o tipo de Nitro
  const getPremiumType = (type?: number) => {
    switch (type) {
      case 1:
        return { label: 'Nitro Classic', color: 'purple' };
      case 2:
        return { label: 'Nitro', color: 'orange' };
      case 3:
        return { label: 'Nitro Basic', color: 'blue' };
      default:
        return { label: 'Sem Nitro', color: 'gray' };
    }
  };

  const premium = getPremiumType(user.premium_type);

  return (
    <Layout>
      <Box minH="100vh" bg={bgColor} py={10}>
        <Container maxW="lg" bg={cardBg} boxShadow="xl" borderRadius="2xl" p={8}>
          <VStack spacing={6} align="center">
            {/* Banner */}
            {user.banner && (
              <Image
                src={`https://cdn.discordapp.com/banners/${user.id}/${user.banner}.png?size=512`}
                alt="Banner do Discord"
                borderRadius="xl"
                w="full"
                maxH="150px"
                objectFit="cover"
                mb={2}
              />
            )}
            {/* Avatar e nome */}
            <Avatar
              size="2xl"
              src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
              name={user.username}
              borderWidth={4}
              borderColor="purple.400"
              mt={user.banner ? -16 : 0}
              boxShadow="lg"
            />
            <Stack direction={{ base: 'column', md: 'row' }} align="center" spacing={2}>
              <Heading size="lg" color={headingColor}>{user.username}</Heading>
              {user.discriminator && user.discriminator !== '0' && (
                <Text color={subTextColor} fontWeight="bold">#{user.discriminator}</Text>
              )}
              <Badge colorScheme={premium.color} fontSize="1em" ml={2}>{premium.label}</Badge>
            </Stack>
            {/* Email e idioma */}
            <HStack spacing={4}>
              {user.email && (
                <HStack>
                  <Text color={subTextColor} fontWeight="bold">Email:</Text>
                  <Text color={textColor}>{user.email}</Text>
                </HStack>
              )}
              {user.locale && (
                <HStack>
                  <Text color={subTextColor} fontWeight="bold">Idioma:</Text>
                  <Text color={textColor}>{user.locale}</Text>
                </HStack>
              )}
            </HStack>
            {/* ID do usuário */}
            <Tooltip label={hasCopied ? 'Copiado!' : 'Copiar ID'} closeOnClick={false} hasArrow>
              <Button size="sm" onClick={onCopy} colorScheme="purple" variant="outline">
                {hasCopied ? 'ID Copiado!' : `Copiar ID: ${user.id}`}
              </Button>
            </Tooltip>
            {/* Flags */}
            {user.flags && (
              <Badge colorScheme="purple" fontSize="0.9em">Flags: {user.flags}</Badge>
            )}
            <Button colorScheme="purple" onClick={logout} alignSelf="flex-end" mt={4}>
              Sair
            </Button>
          </VStack>
        </Container>
      </Box>
    </Layout>
  );
}; 