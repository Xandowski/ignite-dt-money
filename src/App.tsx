import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { GlobalStyles } from "./styles/global"
import { useState } from "react"
import { NewTransictionModal } from "./components/NewTransactionModal"
import { TransactionsProvider } from "./hooks/useTransactions"

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal () {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal () {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard/>
      <NewTransictionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyles/>
    </TransactionsProvider>
  )
}
