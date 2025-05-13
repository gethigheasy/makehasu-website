import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Card,
  CardBody,
  CardHeader,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import { usePageTitle } from '../hooks/usePageTitle';

interface Command {
  name: string;
  description: string;
  usage: string;
  category: string;
}

const commands: Command[] = [
  // Comandos de Instagram
  {
    name: '/instagram',
    description: 'Envia fotos no estilo Instagram diretamente no seu servidor',
    usage: '/instagram [url da imagem] [legenda]',
    category: 'Instagram',
  },
  {
    name: '/setinstagram',
    description: 'Configura o canal onde as fotos do Instagram serão enviadas',
    usage: '/setinstagram #canal',
    category: 'Instagram',
  },

  // Comandos de Moderação
  {
    name: '/ban',
    description: 'Bane um usuário do servidor',
    usage: '/ban @usuário [motivo]',
    category: 'Moderação',
  },
  {
    name: '/kick',
    description: 'Expulsa um usuário do servidor',
    usage: '/kick @usuário [motivo]',
    category: 'Moderação',
  },
  {
    name: '/mute',
    description: 'Silencia um usuário temporariamente',
    usage: '/mute @usuário [tempo] [motivo]',
    category: 'Moderação',
  },
  {
    name: '/clear',
    description: 'Limpa mensagens do canal',
    usage: '/clear [quantidade]',
    category: 'Moderação',
  },
  {
    name: '/warn',
    description: 'Adverte um usuário',
    usage: '/warn @usuário [motivo]',
    category: 'Moderação',
  },

  // Comandos de Ticket
  {
    name: '/criaropcoesticket',
    description: 'Cria uma mensagem personalizada para o sistema de tickets',
    usage: '/criaropcoesticket [título] [descrição] [cor]',
    category: 'Tickets',
  },
  {
    name: '/msgticket',
    description: 'Configura o sistema de tickets',
    usage: '/msgticket #canal-categorias #canal-logs',
    category: 'Tickets',
  },
];

const CommandCard = ({ command }: { command: Command }) => {
  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Card
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      overflow="hidden"
      width="100%"
    >
      <CardHeader pb={0}>
        <HStack justify="space-between" align="center">
          <Heading size="md" color="purple.500">
            {command.name}
          </Heading>
          <Badge colorScheme="purple">{command.category}</Badge>
        </HStack>
      </CardHeader>
      <CardBody>
        <VStack align="start" spacing={2}>
          <Text color="gray.600">{command.description}</Text>
          <Text fontSize="sm" color="gray.500">
            Uso: <code>{command.usage}</code>
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export const Commands = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  usePageTitle('Comandos');

  return (
    <Box minH="100vh" bg={bgColor} py={10}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          <Box textAlign="center">
            <Heading size="2xl" mb={4} color="purple.500">
              Comandos do Makehasu
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Explore todos os comandos disponíveis para gerenciar seu servidor
            </Text>
          </Box>

          {['Instagram', 'Moderação', 'Tickets'].map((category) => (
            <Box key={category}>
              <Heading size="lg" mb={4} color="purple.400">
                {category}
              </Heading>
              <VStack spacing={4} align="stretch">
                {commands
                  .filter((cmd) => cmd.category === category)
                  .map((command) => (
                    <CommandCard key={command.name} command={command} />
                  ))}
              </VStack>
              <Divider my={8} />
            </Box>
          ))}

          <Box textAlign="center" mt={8}>
            <Text fontSize="sm" color="gray.500">
              Desenvolvido com ❤️ por Visions e Vordlex
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}; 