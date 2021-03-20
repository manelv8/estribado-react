import React from 'react';
import styled from 'styled-components'
import { GlobalStyle} from './styles/global';

// import './App.css';

const Title = styled.h1`
  font-size: 64px;
  color: #8257e6;
`
function App() {
  return (
    <div>
      <Title>hello</Title>
      <GlobalStyle/>
    </div>
  );
}

export default App;
