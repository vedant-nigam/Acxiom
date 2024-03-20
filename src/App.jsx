import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MaintenanceMenu from './pages/admin/MaintenanceMenu';
import MembershipForm from './pages/admin/MembershipForm';
import UserForm from './pages/admin/UserForm';
import VendorForm from './pages/admin/VendorForm';
import UserManagement from './pages/admin/UserManagement';
import VendorManagement from './pages/admin/VendorManagement';
import MembershipAssignment from './pages/admin/MembershipAssignment';
import YourItemsPage from './pages/vendor/YourItems';
import AddNewItemPage from './pages/vendor/AddNewItem';
import TransactionsPage from './pages/vendor/Transactions';
import VendorsPage from './users/Vendors';
import CartPage from './users/Cart';
import WishlistPage from './users/Wishlist';
import OrdersPage from './users/Orders';
import LoginPage from './pages/Login';
import MaintenanceMenuVendor from './pages/vendor/VendorMenu';
import MaintenanceMenuUser from './users/UserMenu';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/maintenance/admin" element={<MaintenanceMenu />} />
        <Route path="/maintenance/vendor" element={<MaintenanceMenuVendor />} />
        <Route path="/maintenance/user" element={<MaintenanceMenuUser />} />
        <Route path="/maintenance/membership" element={<MembershipForm />} />
        <Route path="/maintenance/user" element={<UserForm />} />
        <Route path="/maintenance/vendor" element={<VendorForm />} />
        <Route path="/maintenance/user-management" element={<UserManagement />} />
        <Route path="/maintenance/vendor-management" element={<VendorManagement />} />
        <Route path="/maintenance/membership-assignment" element={<MembershipAssignment />} />

        <Route path="/vendor/your-items" element={<YourItemsPage />} />
        <Route path="/vendor/add-new-item" element={<AddNewItemPage />} />
        <Route path="/vendor/transactions" element={<TransactionsPage />} />

        <Route path="/user/vendors/all" element={<VendorsPage />} />
        <Route path="/user/cart" element={<CartPage />} />
        <Route path="/user/wishlist" element={<WishlistPage />} />
        <Route path="/user/orders" element={<OrdersPage />} />
      </Routes>
    </Router>
  );
}

export default App;