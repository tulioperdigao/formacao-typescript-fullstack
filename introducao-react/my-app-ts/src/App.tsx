import { Layout } from './components/layout';
import styled from 'styled-components';

const Box = styled.div`
  background-color: orange;
  border-radius: 25px;
  padding-left: 15px;
  text-align: center;
`

function App() {
  return (
    <Layout>
        <Box>
          <h1>Faça o Login</h1>
        </Box>
        <label htmlFor='emailInput'>
          E-mail
        </label>
        <input id='emailInput' type='email' />

        <label htmlFor='passwordInput'>
          Senha
        </label>
        <input id='passwordInput' type='password' />
        
        <button>
          Entrar
        </button>
    </Layout>
  );
}

export default App;
