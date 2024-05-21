import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa'
import UltimosLancamentos from './componentes/UltimosLancamentos'
import styled from 'styled-components';

const AppComponets = styled.div `
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function App() {
  return (
    <AppComponets>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppComponets>
  );
}

export default App;
