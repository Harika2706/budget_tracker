import React from "react";

const AddExpense = () => {
  return (
    <form>
      <div className="mb-3">
        <label class="form-label">Name</label>
        <input
          required="required"
          type="text"
          class="form-control"
          id="name"
        ></input>
      </div>
      <div className="mb-3">
        <label class="form-label">Cost</label>
        <input type="number" class="form-control" id="cost"></input>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Save
      </button>
    </form>
  );
};

export default AddExpense;
