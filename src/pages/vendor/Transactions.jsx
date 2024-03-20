import React, { useState } from 'react';

function TransactionsPage() {
    // Dummy data
    const [transactions, setTransactions] = useState([
        { id: 1, description: 'Transaction 1', amount: 100 },
        { id: 2, description: 'Transaction 2', amount: 200 },
        { id: 3, description: 'Transaction 3', amount: 300 }
    ]);

    return (
        <div>
            <h2>Transactions</h2>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.id}>
                        <div>{transaction.description} - ${transaction.amount}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionsPage;
