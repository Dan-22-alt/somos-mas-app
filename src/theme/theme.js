import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: {
    Container: {
        baseStyle: {
            maxWidth: "container.xl",
        },
    },
  },
  colors: {
    primary: {
      100: '#62abf8',
      200: '#76b5f9',
      300: '#89c0fa',
      400: '#9AC9FB', //color primario
      500: '#b1d5fc',
      600: '#c4dffd',
      700: '#d8eafd',
      800: '#264F7A',
    },
  },
});
