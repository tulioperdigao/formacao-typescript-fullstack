import { Layout } from './components/layout';
import { Box, Button, Center, ChakraProvider, Input } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#23a25a' padding='25px'>
        <Box backgroundColor='#ffffff' borderRadius='25px' padding='15px'>
          <Center>
            <h1>Faça o Login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <Button colorScheme='teal' size='sm' width='100%' marginTop='10px'>
              Entrar
            </Button>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
