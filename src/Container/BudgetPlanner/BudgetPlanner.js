import React, { useEffect, useState } from "react";
import Budget from "../../Components/Budget/Budget";
import ExpenseTotal from "../../Components/ExpenseTotal/ExpenseTotal";
import Remaining from "../../Components/Remaining/Remaining";

const BudgetPlanner = () => {
  return (
    <div className="row mt-3">
      <div className="col-sm">
        <Budget />
      </div>
      <div className="col-sm">
        <Remaining />
      </div>
      <div className="col-sm">
        <ExpenseTotal />
      </div>
    </div>
  );
};

export default BudgetPlanner;
