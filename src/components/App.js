import React, { useEffect } from "react";
import AccountContainer from "./AccountContainer";
import Transaction from "./Transaction";

function App() {
  useEffect(()=>{
fetch("http://localhost:8001/transactions")
.then(r=>r.json,{})
.then(transaction=>console.log,{Transaction})
})
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;
