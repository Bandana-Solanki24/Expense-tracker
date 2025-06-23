


const Overview = ({ expenses, selectedMonth, onMonthChange }) => {

    const total = expenses.reduce((sum, item) => sum + parseFloat(item.amount), 0);

    const monthNames = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December",
    };
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
                        {Object.entries(monthNames).map(([value, name]) => (
                            <option key={value} value={value}>{name}</option>
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
