import React from 'react';
import { CSSReset, ThemeProvider, Flex } from '@chakra-ui/core';
import Header from './Header';
import customTheme from '../components/customTheme';

const Layout = ({ children }) => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <Flex direction="column" spacing={4} color="white">
      <Header />
      <Flex justify="center">{children}</Flex>
      <Flex as="footer" align-="center" justify="center" color="grey">
        Footer
      </Flex>
    </Flex>
  </ThemeProvider>
);

export default Layout;
