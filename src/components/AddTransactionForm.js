import React, {useState} from "react";

function AddTransactionForm({ onSubmitting }) {
const [formData, setFormData] = useState({
  date: "",
  description: "",
  category: "",
  amount: 0.01
});
function handleChangeAction(event) {
  setFormData({ ...formData, [event.target.name]: [event.target.value] }) ;
}

function handleSubmitAction(event) {
  event.preventDefault();
  onSubmitting(formData);
  setFormData({
    date: "",
    description: "",
    category: "",
    amount: 0.01,
  });
}
  return (
    <div className="ui segment">
      <form onSubmit={handleSubmitAction} onChange={handleChangeAction} className="ui form">
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
