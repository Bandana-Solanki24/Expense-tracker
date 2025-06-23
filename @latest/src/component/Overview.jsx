


const Overview = ({ expenses, selectedMonth, onMonthChange }) => {

    const total = expenses.reduce((sum, item) => sum + parseFloat(item.amount), 0);

    const monthNames = [
        { value: "01", name: "January" },
        { value: "02", name: "February" },
        { value: "03", name: "March" },
        { value: "04", name: "April" },
        { value: "05", name: "May" },
        { value: "06", name: "June" },
        { value: "07", name: "July" },
        { value: "08", name: "August" },
        { value: "09", name: "September" },
        { value: "10", name: "October" },
        { value: "11", name: "November" },
        { value: "12", name: "December" },
    ];

    const topCategory =
        expenses.length > 0
            ? expenses.reduce((acc, curr) => {
                acc[curr.category] = (acc[curr.category] || 0) + parseFloat(curr.amount);
                return acc;
            }, {})
            : {};

    const highestCategory = Object.keys(topCategory).reduce((a, b) => (topCategory[a] > topCategory[b] ? a : b), '');




    return (
        <div className="overview-box">
            <div className="overview-header">
                <h className="overview-heading">Monthly Overview</h>
                <div>
                    <label for="month">Select Month: {monthNames[selectedMonth] || "All Months"}</label>
                    <select id="month" value={selectedMonth} onChange={(e) => onMonthChange(e.target.value)}>
                        <option value="">-- Select Month --</option>
                        {monthNames.map((month) => (
                            <option key={month.value} value={month.value}>{month.name}</option>
                        ))}

                    </select>
                </div>
            </div>
            <div className="overview">
                <div className="box" style={{ backgroundColor: "#F8EDEB" }}>Total Spent: Rs.{total}</div>
                <div className="box" style={{ backgroundColor: "#FEC89A" }}>Highest Category: {highestCategory}</div>
                <div className="box" style={{ backgroundColor: "#FCD5CE" }}>Total Expenses: {expenses.length}</div>
            </div>
        </div>
    );
};

export default Overview;
