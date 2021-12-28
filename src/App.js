import SquareGenerator from './Components/SquareGenerator';
import styled from 'styled-components';

function App() {
  return (
    <div 
      style={{
        backgroundColor: 'black',
        height: '100vh',
        maring: 0
      }}
      className="App">
      <Title>Click me while you can!</Title>
      <SquareGenerator />
    </div>
  );
}

export default App;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: white;
  font-size: 108px;
`