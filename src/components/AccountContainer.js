import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

  const [transactions, setTransactions] = useState([]);
  //const [searchTransaction, setSearchTransaction] = useState("")
  useEffect( () => {
    fetch("http://localhost:8001/transactions")
    .then( (res) => res.json())
    .then((trans) => setTransactions (trans));
  }, []);

  console.log(transactions);

  function handleUpdateOnSubmitting(newTransaction) {
    //console.log(newTransaction);
    setTransactions(transactions => [ ...transactions, newTransaction]);
  }
  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList />
    </div>
  );
}

export default AccountContainer;
