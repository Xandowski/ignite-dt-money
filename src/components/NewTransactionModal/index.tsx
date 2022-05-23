import Modal from "react-modal"
import { Container, RadioBox, TransactionTypeContainer } from "./styles"
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'
import { FormEvent, useState } from "react"
import { useTransactions } from "../../hooks/useTransactions"

Modal.setAppElement('#root');

interface NewTransactionModal {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransictionModal ({isOpen, onRequestClose}:NewTransactionModal) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [type, setType] = useState('deposit')
  const [category, setCategory] = useState('')
  const {setSubmitTransaction, createTransaction} = useTransactions()

  async function handleSubmitNewTransaction(event: FormEvent) {
    event.preventDefault()
    
    setSubmitTransaction(false)

    await createTransaction({
      title,
      value,
      type,
      category
    })

    setSubmitTransaction(true)

    setTitle('')
    setValue(0)
    setType('deposit')
    setCategory('')

    onRequestClose()
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

      <Container onSubmit={handleSubmitNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input 
          type="text" 
          placeholder="Título"
          value={title} 
          onChange={event => setTitle((event.target as HTMLInputElement).value)}
        />
        
        <input 
          type="number" 
          placeholder="Valor"
          name="value"
          value={value}
          onChange={event => setValue(Number((event.target as HTMLInputElement).value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor={'green'}
            >
            <img src={incomeImg} alt="entrada" />
            <span>Entrada</span>
            
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor={'red'}
          >
            <img src={outcomeImg} alt="saida" />
            <span>Saída</span>
            
          </RadioBox>
        </TransactionTypeContainer>
        <input 
          type="text" 
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory((event.target as HTMLInputElement).value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}