import { Routes, Route } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import CartProvider from './components/store/CartProvider';

function App() {
    return (
        <CartProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/auth" element={<AuthPage />} />
            </Routes>
        </CartProvider>
    );
}

export default App;
