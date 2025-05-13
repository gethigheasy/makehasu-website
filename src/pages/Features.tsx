import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Icon,
  useColorModeValue,
  Flex,
  chakra,
} from '@chakra-ui/react';
import { FaRobot, FaShieldAlt, FaInstagram, FaMusic, FaSmile, FaTicketAlt } from 'react-icons/fa';
import { Layout } from '../components/Layout';

const features = [
  {
    icon: FaRobot,
    title: 'Comandos Inteligentes',
    description: 'Comandos personalizados, automações e respostas inteligentes para sua comunidade.',
    color: 'purple.400',
  },
  {
    icon: FaShieldAlt,
    title: 'Moderação Avançada',
    description: 'Ferramentas poderosas para manter seu servidor seguro e organizado.',
    color: 'blue.400',
  },
  {
    icon: FaInstagram,
    title: 'Posts no estilo Instagram',
    description: 'Crie e compartilhe posts com visual semelhante ao Instagram diretamente no seu servidor.',
    color: 'pink.400',
  },
  {
    icon: FaMusic,
    title: 'Música de Qualidade',
    description: 'Ouça músicas de alta qualidade com comandos simples e intuitivos.',
    color: 'teal.400',
  },
  {
    icon: FaSmile,
    title: 'Diversão e Entretenimento',
    description: 'Jogos, memes, sorteios e comandos divertidos para animar seu servidor.',
    color: 'yellow.400',
  },
  {
    icon: FaTicketAlt,
    title: 'Sistema de Tickets',
    description: 'Gerencie suporte e atendimento com um sistema de tickets eficiente.',
    color: 'orange.400',
  },
];

const GradientText = chakra('span', {
  baseStyle: {
    bgGradient: 'linear(to-r, purple.400, pink.400, blue.400)',
    bgClip: 'text',
    fontWeight: 'extrabold',
  },
});

export const Features = () => {
  const bgGradient = useColorModeValue(
    'linear(to-b, white, purple.50, purple.100)',
    'linear(to-b, gray.900, purple.900, gray.900)'
  );
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardShadow = useColorModeValue('lg', 'dark-lg');

  return (
    <Layout>
      <Box minH="100vh" bgGradient={bgGradient} py={{ base: 10, md: 20 }}>
        <Container maxW="container.lg">
          <Stack spacing={8} textAlign="center" align="center" mb={12}>
            <Heading fontSize={{ base: '3xl', md: '5xl' }}>
              <GradientText>Recursos do Makehasu</GradientText>
            </Heading>
            <Text fontSize={{ base: 'lg', md: '2xl' }} color={useColorModeValue('gray.600', 'gray.300')} maxW="2xl">
              Descubra tudo que o Makehasu pode oferecer para tornar seu servidor Discord mais divertido, seguro e organizado.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {features.map((feature) => (
              <Flex
                key={feature.title}
                direction="column"
                align="center"
                bg={cardBg}
                boxShadow={cardShadow}
                borderRadius="2xl"
                p={8}
                transition="transform 0.2s, box-shadow 0.2s"
                _hover={{ transform: 'translateY(-8px) scale(1.03)', boxShadow: '2xl' }}
              >
                <Flex
                  w={20}
                  h={20}
                  align="center"
                  justify="center"
                  borderRadius="full"
                  bgGradient={`linear(to-br, ${feature.color}, purple.500)`}
                  mb={6}
                  boxShadow="md"
                >
                  <Icon as={feature.icon} w={10} h={10} color="white" />
                </Flex>
                <Heading fontSize="xl" mb={2} color={feature.color}>
                  {feature.title}
                </Heading>
                <Text color={useColorModeValue('gray.700', 'gray.200')}>
                  {feature.description}
                </Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  );
}; 