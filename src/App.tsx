import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement("#root")

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

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}/>
      
      <GlobalStyle />
    </div>
  );
}

export default App;
