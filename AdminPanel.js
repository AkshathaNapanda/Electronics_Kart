import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import AdminFeedback from './AdminFeedback';
import AllOrders from './AllOrders';
import ManageProduct from './ManageProduct';
import AdminLogin from './AdminLogin'
function AdminPanel() {
    return (
        <>
            <AdminNavbar />
            <Routes>
            <Route path="/" element={<AdminLogin />} />
                <Route path="/orders" element={<AllOrders />} />
                <Route path="/products" element={<ManageProduct />} />
                <Route path="/feedbacks" element={<AdminFeedback />} />
            </Routes>
        </>
    );
}

export default AdminPanel;