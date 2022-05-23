import { useContext } from "react"
import { Container, Content } from "./styles"
import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'
import TotalIcon from '../../assets/total.svg'
import { useTransactions } from "../../hooks/useTransactions"

export function Summary () {
  const {transactions} = useTransactions()

  const depositTransactions = transactions.filter((transaction) => {
    return transaction.type === 'deposit'
  }).reduce((acc, transaction) => acc + transaction.value, 0)

  const withdrawTransactions = transactions.filter((transaction) => {
    return transaction.type === 'withdraw'
  }).reduce((acc, transaction) => acc + transaction.value, 0)

  const totalTransactions = depositTransactions - withdrawTransactions

  return (
    <Container>
      <Content>
        <header>
          <span>Entradas</span>
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(depositTransactions)}
        </strong>
      </Content>

      <Content>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="saidas" />
        </header>
        <strong>
          - {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(withdrawTransactions)}
        </strong>
      </Content>

      <Content
        total={totalTransactions}
      >
        <header>
          <p>Total</p>
          <img src={TotalIcon} alt="total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(totalTransactions)}
        </strong>
      </Content>
    </Container>
  )
}