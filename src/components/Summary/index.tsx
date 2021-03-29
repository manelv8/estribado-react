import { useContext } from 'react';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary() {
  const {transactions} = useTransactions();
  
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} />
        </header>
        <strong>R$ 1000</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} />
        </header>
        <strong>R$ -500</strong>
      </div>

      <div className="hightlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} />
        </header>
        <strong>R$ 500</strong>
      </div>
    </Container>
  );
}