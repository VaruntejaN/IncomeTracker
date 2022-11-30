import React from "react";
import IncomeItem from "./IncomeItem";

function IncomeList({ income, setIncome }) {
  const removeIncome = (i) => {
    let temp = income.filter((v, index) => index !== i);
    setIncome(temp);
    localStorage.setItem("income", JSON.stringify(temp));
  };

  return (
    <div className="income-list">
      {income && income.map((value, index) => {
        return (
          <IncomeItem
            key={index}
            income={value}
            index={index}
            removeIncome={removeIncome}
          />
        );
      })}
    </div>
  );
}

export default IncomeList;
