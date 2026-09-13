import './SettingsPage.css'

function SettingsPage() {
  return (
    <div className="page settings-page">
      <h1>Settings</h1>
      <p>Manage your account preferences.</p>
      <div className="settings-section">
        <h2>Notification Preferences</h2>
        <label><input type="checkbox" defaultChecked /> Email notifications</label>
      </div>
      <div className="settings-section">
        <h2>Change Password</h2>
        <input type="password" placeholder="New password" style={{ maxWidth: 300 }} />
        <button className="btn-primary" style={{ marginTop: 10, display: 'block' }}>Update Password</button>
      </div>
    </div>
  )
}

export default SettingsPage
