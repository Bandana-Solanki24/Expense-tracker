const ExpenseItem = ({ expense, onDelete }) => {
    const handleDelete = () => {
        onDelete(expense.id)
    }
    return (
        <div className="expense-card">
            <div>
                <h4>{expense.title}</h4>
                <p>{new Date(expense.date).toDateString()}</p>
                <span className="tag">{expense.category}</span>
                <button onClick={handleDelete}>Delete</button>
            </div>
            <strong>Rs.{expense.amount}</strong>
        </div>
    );
};

export default ExpenseItem;
