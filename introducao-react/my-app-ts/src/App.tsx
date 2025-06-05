import { Card } from './components/card';
import { Layout } from './components/layout';

function App() {
  return (
    <Layout>
        Hello World
        <Card 
          id={1}
          paragraph='Typescript'
          details='TS para front-end e back-end'
        />
        <Card 
          id={2}
          paragraph='HTML'
          details='HTML para front-end'
        />
        <Card 
          id={3}
          paragraph='CSS'
          details='CSS para front-end'
        />
        <Card 
          id={4}
          paragraph='SQL'
          details='SQL para banco de dados'
        />
    </Layout>
  );
}

export default App;
