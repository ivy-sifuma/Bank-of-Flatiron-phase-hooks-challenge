import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

  const [transactions, setTransactions] = useState([]);
  //const [searchTransactions, setSearchTransactions] = useState("")
  useEffect( () => {
    fetch("http://localhost:8001/transactions")
    .then( (res) => res.json())
    .then((trans) => setTransactions (trans));
  }, []);

  console.log(transactions);

  function handleUpdateOnSubmitting(newTransaction) {
    //console.log(newTransaction);
    setTransactions(transactions => [ ...transactions,newTransaction]);

    const serverOptions = {
      method: "POST" ,
      headers: {
        "Content-type": "application/json",
      },
      body:JSON.stringify(newTransaction),
    };
    fetch("http://localhost:8001/transactions" ,serverOptions)
    .then((res) => res.json())
    .then(newData => setTransactions((transactions) => [...transactions, newData]))
    .catch(error => console.log(error))

  }
  function handleOnSearch(search) {
    setTransactions(transactions => transactions.filter(
      transaction => transaction.description.includes(search)
    ))
  }
  return (
    <div>
      <Search onSearch={handleOnSearch} />
      <AddTransactionForm onSubmitting={handleUpdateOnSubmitting}/>
      <TransactionsList transactions={transactions} /> 
    </div>
  );
}

export default AccountContainer;
