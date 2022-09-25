import React from "react";

function Transaction() {
  <th>AMOUNT</th>
  {transactions.map(transaction=>{
  return (
    <tr>
       <td>{"transaction.date"}</td>
      <td>{"transaction.description"}</td>
      <td>{"transaction.category"}</td>
      <td>{"transaction.amount"}</td>
    </tr>
   
  );
  }
}

export default Transaction;
