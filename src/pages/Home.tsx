import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaDiscord, FaRobot, FaShieldAlt, FaInstagram, FaTerminal } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { useDiscordAuth } from '../hooks/useDiscordAuth';
import { usePageTitle } from '../hooks/usePageTitle';
import { Layout } from '../components/Layout';

const Feature = ({ icon, title, text }: { icon: any; title: string; text: string }) => {
  const textColor = useColorModeValue('gray.800', 'white');
  return (
    <Stack spacing={4} align="center" textAlign="center">
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        color="white"
        rounded="full"
        bg="purple.500"
        mb={1}
      >
        <Icon as={icon} w={8} h={8} />
      </Flex>
      <Text fontWeight="bold" color={textColor} fontSize="lg" opacity={1}>{title}</Text>
      <Text color={textColor} opacity={1}>{text}</Text>
    </Stack>
  );
};

export const Home = () => {
  const { login } = useDiscordAuth();
  usePageTitle('Início');
  const bgHero = useColorModeValue('gray.50', 'gray.900');
  const headingColor = useColorModeValue('gray.900', 'white');
  const subTextColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Layout>
      <Box bg={bgHero} py={20}>
        <Container maxW="container.xl">
          <Stack
            align="center"
            spacing={{ base: 8, md: 10 }}
            direction={{ base: 'column', md: 'row' }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                color={headingColor}
              >
                <Text
                  as="span"
                  position="relative"
                  _after={{
                    content: "''",
                    width: 'full',
                    height: '30%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'purple.400',
                    zIndex: -1,
                  }}
                >
                  Makehasu
                </Text>
                <br />
                <Text as="span" color="purple.400">
                  Feito por Visions e Vordlex
                </Text>
              </Heading>
              <Text color={subTextColor}>
                Makehasu é um bot Discord versátil e poderoso que oferece moderação,
                música, diversão e muito mais para sua comunidade.
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: 'column', sm: 'row' }}
              >
                <Button
                  as="a"
                  href="https://discord.com/api/oauth2/authorize?client_id=1297764449175732246&permissions=8&scope=bot%20applications.commands"
                  target="_blank"
                  rounded="full"
                  size="lg"
                  fontWeight="normal"
                  px={6}
                  colorScheme="purple"
                  bg="purple.400"
                  _hover={{ bg: 'purple.500' }}
                  leftIcon={<FaRobot />}
                >
                  Adicionar Bot
                </Button>
                <Button
                  onClick={login}
                  rounded="full"
                  size="lg"
                  fontWeight="normal"
                  px={6}
                  variant="outline"
                  colorScheme="purple"
                >
                  Dashboard
                </Button>
                <Button
                  as={RouterLink}
                  to="/commands"
                  rounded="full"
                  size="lg"
                  fontWeight="normal"
                  px={6}
                  leftIcon={<FaTerminal />}
                  variant="outline"
                  colorScheme="purple"
                >
                  Ver Comandos
                </Button>
                <Button
                  as={RouterLink}
                  to="/emphasis"
                  rounded="full"
                  size="lg"
                  fontWeight="normal"
                  px={6}
                  leftIcon={<FaDiscord />}
                  variant="outline"
                  colorScheme="purple"
                >
                  Servidor de Suporte
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <Stack spacing={4} as={Container} maxW="3xl" textAlign="center" mb={16}>
            <Heading fontSize="3xl" color={headingColor} fontWeight="bold" opacity={1}>
              Recursos Incríveis
            </Heading>
            <Text color={subTextColor} opacity={1}>
              O Makehasu oferece uma variedade de recursos para tornar seu servidor
              mais divertido e organizado.
            </Text>
          </Stack>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}
            align="center"
          >
            <Feature
              icon={FaRobot}
              title="Comandos Inteligentes"
              text="Comandos personalizados e respostas automáticas para sua comunidade."
            />
            <Feature
              icon={FaShieldAlt}
              title="Moderação Avançada"
              text="Ferramentas poderosas de moderação para manter seu servidor seguro."
            />
            <Feature
              icon={FaInstagram}
              title="Posts no estilo Instagram"
              text="Crie e compartilhe posts com visual semelhante ao Instagram diretamente no seu servidor."
            />
          </Stack>
        </Container>
      </Box>
    </Layout>
  );
}; 