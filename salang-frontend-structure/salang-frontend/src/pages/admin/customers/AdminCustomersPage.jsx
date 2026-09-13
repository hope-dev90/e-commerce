import './AdminCustomersPage.css'

const sampleCustomers = [
  { id: 1, name: 'Alice Smith',  email: 'alice@example.com',  orders: 3 },
  { id: 2, name: 'Bob Johnson',  email: 'bob@example.com',    orders: 1 },
  { id: 3, name: 'Carol White',  email: 'carol@example.com',  orders: 2 },
  { id: 4, name: 'Dave Brown',   email: 'dave@example.com',   orders: 0 },
  { id: 5, name: 'Eva Green',    email: 'eva@example.com',    orders: 4 },
  { id: 6, name: 'Frank Lee',    email: 'frank@example.com',  orders: 1 },
  { id: 7, name: 'Grace Kim',    email: 'grace@example.com',  orders: 2 },
  { id: 8, name: 'Henry Davis',  email: 'henry@example.com',  orders: 3 },
  { id: 9, name: 'Irene Wilson', email: 'irene@example.com',  orders: 1 },
  { id: 10, name: 'Jack Taylor', email: 'jack@example.com',   orders: 2 },
]

function AdminCustomersPage() {
  return (
    <div className="page admin-customers">
      <h1>Admin — Customers</h1>
      <table className="admin-table">
        <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Orders</th></tr></thead>
        <tbody>
          {sampleCustomers.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.orders}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminCustomersPage
