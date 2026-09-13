import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import ProtectedRoute from './components/protected-route/ProtectedRoute.jsx'

// Public pages
import HomePage from './pages/home/HomePage.jsx'
import ProductsPage from './pages/products/ProductsPage.jsx'
import ProductDetailsPage from './pages/products/ProductDetailsPage.jsx'
import CategoriesPage from './pages/categories/CategoriesPage.jsx'
import AboutPage from './pages/about/AboutPage.jsx'
import ContactPage from './pages/contact/ContactPage.jsx'
import CartPage from './pages/cart/CartPage.jsx'

// Auth pages
import LoginPage from './pages/auth/LoginPage.jsx'
import RegisterPage from './pages/auth/RegisterPage.jsx'
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage.jsx'

// Customer pages
import CheckoutPage from './pages/checkout/CheckoutPage.jsx'
import OrderSuccessPage from './pages/order-success/OrderSuccessPage.jsx'
import MyOrdersPage from './pages/orders/MyOrdersPage.jsx'
import OrderDetailsPage from './pages/orders/OrderDetailsPage.jsx'
import ProfilePage from './pages/profile/ProfilePage.jsx'
import WishlistPage from './pages/wishlist/WishlistPage.jsx'
import SettingsPage from './pages/settings/SettingsPage.jsx'

// Admin pages
import AdminDashboardPage from './pages/admin/dashboard/AdminDashboardPage.jsx'
import AdminProductsPage from './pages/admin/products/AdminProductsPage.jsx'
import AdminAddProductPage from './pages/admin/products/AdminAddProductPage.jsx'
import AdminEditProductPage from './pages/admin/products/AdminEditProductPage.jsx'
import AdminOrdersPage from './pages/admin/orders/AdminOrdersPage.jsx'
import AdminOrderDetailsPage from './pages/admin/orders/AdminOrderDetailsPage.jsx'
import AdminCustomersPage from './pages/admin/customers/AdminCustomersPage.jsx'
import AdminMessagesPage from './pages/admin/messages/AdminMessagesPage.jsx'

// Error
import NotFoundPage from './pages/errors/NotFoundPage.jsx'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <Routes>
          {/* Public */}
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />

          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          {/* Protected customer */}
          <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
          <Route path="/order-success" element={<ProtectedRoute><OrderSuccessPage /></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><MyOrdersPage /></ProtectedRoute>} />
          <Route path="/orders/:id" element={<ProtectedRoute><OrderDetailsPage /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/wishlist" element={<ProtectedRoute><WishlistPage /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />

          {/* Admin */}
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/products/add" element={<AdminAddProductPage />} />
          <Route path="/admin/products/edit/:id" element={<AdminEditProductPage />} />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetailsPage />} />
          <Route path="/admin/customers" element={<AdminCustomersPage />} />
          <Route path="/admin/messages" element={<AdminMessagesPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
