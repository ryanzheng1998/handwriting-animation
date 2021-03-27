import React from 'react';
import styled from 'styled-components';
import HandWriting from './components/HandWriting'

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
`

const App: React.FC = () => {
  return (
    <MainContainer>
      <HandWriting />
    </MainContainer>
  )
}

export default App;
