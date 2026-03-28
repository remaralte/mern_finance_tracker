export const FinancialRecordForm = () => {
    return (
        <div className="form-container">
            <form>
                <div className="form-field">
                    <label>Description:</label>
                    <input type="text" required className="input" />
                </div>
                <div className="form-field">
                    <label>Amount:</label>
                    <input type="number" required className="input" />
                </div>
                <div className="form-field">
                    <label>Category:</label>
                    <select required className="input">
                        <option value="">Select Category</option>
                        <option value="Food">Food</option>
                        <option value="Rent">Rent</option>
                        <option value="Salary">Salary</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-field">
                    <label>Payment Method:</label>
                    <select required className="input">
                        <option value="">Select Payment Method</option>
                        <option value="UPI">UPI</option>
                        <option value="Cash">Cash</option>
                        <option value="Debit Card">Debit Card</option>
                        <option value="Credit Card">Credit Card</option>
                    </select>
                </div>
                <button type="submit" className="button">
                    Add Record
                </button>
            </form>
        </div>
    );
}