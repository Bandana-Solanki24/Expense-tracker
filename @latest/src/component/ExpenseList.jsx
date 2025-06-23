import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, onDelete }) => {
    return (
        <div className="expense-list">
            {expenses.length === 0 ? (
                <p>No expenses found for selected month.</p>
            ) : (
                expenses.map((item) => (
                    <ExpenseItem key={item.id} expense={item} onDelete={onDelete} />
                ))
            )}
        </div>
    );
};

export default ExpenseList;
