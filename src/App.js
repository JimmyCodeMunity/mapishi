import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddProduct from './pages/AddProduct';
import LoginPage from './pages/LoginPage';
import AddUser from './pages/AddUser';
import AddStaff from './pages/AddStaff';
import Users from './pages/Users';
import Staff from './pages/Staff';
import Products from './pages/Products';
import PrivateRoutes from './context/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthSignUp from './pages/SignUp';
import Sales from './pages/Sales';
import AddNotifications from './pages/AddNotifications';
import ContactUs from './pages/ContactUs';
import FeedbacksPage from './pages/FeedbacksPage';
import NotificationsPage from './pages/NotificationsPage';
import BlockedAccountsPage from './pages/BlockedAccountsPage';
import RestrictUserPage from './pages/RestrictUserPage';
import CreateAdPage from './pages/CreateAdPage';
import CreateCategoryPage from './pages/CreateCategoryPPage';
import ByLawsPage from './pages/ByLawsPage';
import DocumentationPage from './pages/DocumentationPage';
import AdminsPage from './pages/AdminsPage';
import CreateAdminPage from './pages/CreateAdminPage';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/addstaff" element={<AddStaff />} />
          <Route path="/users" element={<Users />} />
          <Route path="/staffs" element={<Staff />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/products" element={<Products />} />

          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/feedbacks" element={<FeedbacksPage />} />
          <Route path="/sendnotifications" element={<AddNotifications />} />
          <Route path="/viewnotifications" element={<NotificationsPage />} />
          <Route path="/blockedacc" element={<BlockedAccountsPage />} />
          <Route path="/restrictuser" element={<RestrictUserPage />} />
          <Route path="/createad" element={<CreateAdPage />} />
          <Route path="/addadmin" element={<CreateAdminPage />} />
          <Route path="/addcategory" element={<CreateCategoryPage />} />
          <Route path="/viewadmin" element={<AdminsPage />} />
          <Route path="/bylaws" element={<ByLawsPage />} />
          <Route path="/profile" element={<Products />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/settings`" element={<Products />} />

        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/authregister" element={<AuthSignUp />} />

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
