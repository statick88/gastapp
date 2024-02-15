// src/components/TransactionForm.jsx

import { useState } from "react";
import PropTypes from "prop-types";

function TransactionForm({ onAddTransaction }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar que el monto y la categoría no estén vacíos
    if (!amount.trim() || !category.trim()) return;
    // Agregar la nueva transacción al arreglo de transacciones
    onAddTransaction({ amount, category });
    // Limpiar los campos después de enviar el formulario
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={handleAmountChange}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={handleCategoryChange}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

TransactionForm.propTypes = {
  onAddTransaction: PropTypes.func.isRequired,
};

export default TransactionForm;
