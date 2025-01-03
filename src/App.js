import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance"
import './App.css'
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import {AddTransaction} from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";


function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
