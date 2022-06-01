import logo from "./logo.svg";
import "./App.css";
import BudgetPlanner from "./Container/BudgetPlanner/BudgetPlanner";
import ExpenseList from "./Container/ExpenseList/ExpenseList";
import AddExpense from "./Container/AddExpense/AddExpense";
import { AppProvider } from "./Context/AppContext";

function App() {
  return (
    <div className="container">
      <div className="card">hello</div>
      <h1 className="mt-3">My Budget Planner</h1>
      <BudgetPlanner />
      <h3>Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
      <h3 className="mt-3">Add Expense</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpense />
        </div>
      </div>
    </div>
  );
}

export default App;
