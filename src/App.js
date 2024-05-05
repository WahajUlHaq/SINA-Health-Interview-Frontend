import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Router from './routers/index';

const App = () => {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
};

export default App;
