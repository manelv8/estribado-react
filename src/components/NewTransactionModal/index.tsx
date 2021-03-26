import {FormEvent, useState, useContext} from 'react';
import { TransactionsContext } from '../../TransactionsContext';
import { api } from '../../services/api';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const {createTransaction} = useContext(TransactionsContext)

  const[title, setTitle] = useState('');
  const[amount, setAmount] = useState(0);
  const[category, setCategory] = useState('');
  const [type,setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    createTransaction( {title, amount, category,type});
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input 
          placeholder="Título"
          value={title}
          onChange={(event)=>setTitle(event.target.value)} />

        <input 
          type="number" 
          placeholder="valor"
          value={amount}
          onChange={(event)=>{setAmount(Number(event.target.value)) }} />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={income} alt="" />
            <span> Entrada </span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcome} alt="" />
            <span> Saída </span>
          </RadioBox>
        </TransactionTypeContainer>
        
        <input 
          placeholder="Categoria"
          value={category}
          onChange={(event) => {setCategory(event.target.value)}} />

        <button type="submit"> Cadastrar</button>
      </Container>
    </Modal>
  );
}
