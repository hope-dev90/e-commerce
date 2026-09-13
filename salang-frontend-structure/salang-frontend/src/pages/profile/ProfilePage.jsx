import { useAuth } from '../../hooks/useAuth.js'
import './ProfilePage.css'

function ProfilePage() {
  const { user } = useAuth()

  return (
    <div className="page profile-page">
      <h1>My Profile</h1>
      <div className="profile-card">
        <p><strong>Email:</strong> {user?.email || 'sample@example.com'}</p>
        <p><strong>Role:</strong> {user?.role || 'customer'}</p>
        <p><strong>Name:</strong> Sample User</p>
      </div>
    </div>
  )
}

export default ProfilePage
