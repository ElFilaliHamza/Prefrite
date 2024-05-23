import React, { useState, useEffect } from 'react';
import { useAppContext } from '../components/AppContext';
import api from '../../../react-frontend/src/api/api';
import Loading from '../components/Loading';
import { Navigate } from 'react-router-dom';

const Invoices = () => {
  const [state] = useAppContext();
  const [invoices, setInvoices] = useState(null);
  const [filter, setFilter] = useState({ name: "", state: "all", date: "" });

  useEffect(() => {
    if (!invoices) {
      api.post('/seller/invoice/get', { filter }).then(response => {
        if (response.ok) {
          setInvoices(response.invoices);
        }
      });
    }
  }, [invoices, filter]);

  if (!state.logged) {
    return <Navigate to="/" />;
  }

  if (!state.infoFetched) {
    return <Loading />;
  }

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prevFilter => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const handleRefresh = () => {
    setInvoices(null);
  };

  return (
    <div>
      <h1>Invoices</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Client Name"
          value={filter.name}
          onChange={handleFilterChange}
        />
        <select
          name="state"
          value={filter.state}
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="not_paid">Not Paid</option>
          <option value="paid">Paid</option>
        </select>
        <input
          type="date"
          name="date"
          value={filter.date}
          onChange={handleFilterChange}
        />
        <button type="submit">Filter</button>
      </form>
      <button onClick={handleRefresh}>Refresh</button>
      {invoices ? (
        <ul>
          {invoices.map(invoice => (
            <li key={invoice._id}>{invoice.clientName} - {invoice.total}</li>
          ))}
        </ul>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Invoices;
