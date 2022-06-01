import React, { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: 12, name: "shopping", cost: 40 },
    { id: 13, name: "holiday", cost: 400 },
    { id: 14, name: "car service", cost: 50 },
  ];
  return (
    <ul className="list-group">
      {expenses.map((item) => {
        return <ExpenseItem id={item.id} name={item.name} cost={item.cost} />;
      })}
    </ul>
  );
};

export default ExpenseList;
