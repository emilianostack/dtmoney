import React, { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsTable } from "./components/TransactionsTable";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './hooks/useTransactions'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);


  function handleOpenNewTransactionModal() {
      setIsNewTransactionOpen(true)
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionOpen(false)
  }

  return (
    <TransactionsProvider>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
     <Dashboard />
     <TransactionsTable />
      <NewTransactionModal 
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
     <GlobalStyle />
    </TransactionsProvider>
  );
}

