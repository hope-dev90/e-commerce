import './AdminMessagesPage.css'

const sampleMessages = [
  { id: 1, name: 'Alice Smith',  email: 'alice@example.com', subject: 'Order question',   message: 'When will my order arrive?' },
  { id: 2, name: 'Bob Johnson',  email: 'bob@example.com',   subject: 'Return request',   message: 'I would like to return item.' },
  { id: 3, name: 'Carol White',  email: 'carol@example.com', subject: 'Product inquiry',  message: 'Is this available in blue?' },
]

function AdminMessagesPage() {
  return (
    <div className="page admin-messages">
      <h1>Admin — Messages</h1>
      <div className="messages-list">
        {sampleMessages.map(m => (
          <div key={m.id} className="message-card">
            <div className="message-header">
              <strong>{m.name}</strong> <span>{m.email}</span>
            </div>
            <p className="message-subject">{m.subject}</p>
            <p className="message-body">{m.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminMessagesPage
