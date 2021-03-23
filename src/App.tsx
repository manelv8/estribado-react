import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

const Title = styled.h1`
  font-size: 64px;
  color: #8257e6;
`;
function App() {
const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
  false
);

function handleOpenNewTransactionModal() {
  setIsNewTransactionModalOpen(true);
}
function handleCloseNewTransactionModal() {
  setIsNewTransactionModalOpen(false);
}

  return (
    <div>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>

      <GlobalStyle />
    </div>
  );
}

export default App;
