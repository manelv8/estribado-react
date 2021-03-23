import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";
import { useState } from "react";

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({onOpenNewTransactionModal}:HeaderProps) {
  

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="estrivado logo"/>
        <button 
          type="button" 
          onClick={onOpenNewTransactionModal}> 
          Nova Transação
        </button>

       
      </Content>
    </Container>
  );
}