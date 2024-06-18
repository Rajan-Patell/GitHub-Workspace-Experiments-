import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const UserAccount = () => {
  const { user, setUser } = useContext(UserContext);
  const [orderHistory, setOrderHistory] = useState([]);

  const fetchOrderHistory = () => {
    // Simulate fetching order history from a database
    const simulatedOrderHistory = [
      { orderId: '123', date: '2021-07-21', status: 'Delivered', total: '$150' },
      { orderId: '456', date: '2021-08-15', status: 'Shipped', total: '$85' },
    ];
    setOrderHistory(simulatedOrderHistory);
  };

  return (
    <div>
      <h2>User Account</h2>
      <div>
        <strong>Username:</strong> {user.username}
      </div>
      <div>
        <button onClick={fetchOrderHistory}>View Order History</button>
      </div>
      {orderHistory.length > 0 && (
        <div>
          <h3>Order History</h3>
          <ul>
            {orderHistory.map((order) => (
              <li key={order.orderId}>
                Order ID: {order.orderId}, Date: {order.date}, Status: {order.status}, Total: {order.total}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserAccount;
