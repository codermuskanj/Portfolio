import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { ColorModeScript} from '@chakra-ui/color-mode';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="light"></ColorModeScript>
    <App />
    </ChakraProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
