import { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        category: '',
        date: '',
        note: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = {
            ...formData,
            id: Date.now(),
        };
        const storedExpense = JSON.parse(localStorage.getItem("expeseList")) || [];
        const updatedExpense = [newExpense, ...storedExpense];
        localStorage.setItem("expeseList", JSON.stringify(updatedExpense))
        onAddExpense(newExpense);

        setFormData({ title: '', amount: '', category: '', date: '', note: '' });
    };

    return (
        <div className="form-card">
            <h3>Add New Expense</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Expense Title" value={formData.title} onChange={handleChange} required />
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" name="amount" placeholder="₹ 0.00" value={formData.amount} onChange={handleChange} required />

                </div>
                <div>
                    <label>Category</label>
                    <select name="category" value={formData.category} onChange={handleChange} required>
                        <option value="">Select category</option>
                        <option value="Food">Food</option>
                        <option value="Bills">Bills</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Travel">Travel</option>
                    </select>
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div>
                    <label>Note</label>
                    <textarea name="note" placeholder="Note (optional)" value={formData.note} onChange={handleChange}></textarea>
                </div>
                <button type="submit">+ Add Expense</button>
            </form>
        </div>
    );
};

export default ExpenseForm;
