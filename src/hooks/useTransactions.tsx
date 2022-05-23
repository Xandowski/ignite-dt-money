import React, { useContext } from 'react'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

export type Transaction = {
  id: number
  title: string
  value: number
  type: string
  category: string
  createdAt: string
}

export type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
  setSubmitTransaction: React.Dispatch<React.SetStateAction<boolean>>
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({children}:TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [submitTransaction, setSubmitTransaction] = useState(false)

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [submitTransaction])
  
  async function createTransaction(transaction: TransactionInput) {
    await api.post('/transactions', transaction)
    setSubmitTransaction(true)
  }

  return(
    <TransactionsContext.Provider
      value={{transactions, setSubmitTransaction, createTransaction}}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}