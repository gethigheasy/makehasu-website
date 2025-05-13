import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  colors: {
    purple: {
      50: '#f5e6ff',
      100: '#d9b3ff',
      200: '#bf80ff',
      300: '#a64dff',
      400: '#8c1aff',
      500: '#7300e6',
      600: '#5900b3',
      700: '#400080',
      800: '#26004d',
      900: '#0d001a',
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'md',
      },
      variants: {
        solid: {
          bg: 'purple.500',
          color: 'white',
          _hover: {
            bg: 'purple.600',
          },
        },
      },
    },
  },
});

export default theme; 