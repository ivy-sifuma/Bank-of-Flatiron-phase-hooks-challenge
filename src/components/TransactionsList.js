import React from "react";
import Transaction from "./Transaction";


function TransactionsList({transactions}) {
  // console.log(transactions);
  // let transactionResults = transactions.map(transaction=> <Transaction key={transaction.id} transaction=
  //   {transaction}
    // />)

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>

{/* render a list of <Transaction> components here */}
       {/* { transactionResults} */}
        {transactions.map((transaction)=> {
      return(
        <Transaction 
          key={transaction.id} 
          date={transaction.date} 
          description={transaction.description} 
          category={transaction.category} 
          amount={transaction.amount} 
          
          
          transaction={transaction}  
        />

      );
    })}
       
        </tbody>
      </table>
    );
          }
        
        

       

export default TransactionsList;
