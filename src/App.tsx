import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { AuthProvider } from '@/context/AuthContext';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { RootLayout } from '@/components/layout/RootLayout';
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import ProductDetails from '@/pages/ProductDetails';
import Corporate from '@/pages/Corporate';
import QuoteWizard from '@/pages/QuoteWizard';
import Catalogues from '@/pages/Catalogues';
import Downloads from '@/pages/Downloads';
import Contact from '@/pages/Contact';
import About from '@/pages/About';
import ReligiousTheme from '@/pages/ReligiousTheme';
import DeskCalendar from '@/pages/DeskCalendar';
import AdminLogin from '@/pages/admin/AdminLogin';
import AdminDashboard from '@/pages/admin/AdminDashboard';

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <RootLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/quote" element={<QuoteWizard />} />
            <Route path="/catalogues" element={<Catalogues />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
            <Route path="/religious-theme" element={<ReligiousTheme />} />
            <Route path="/desk-calendar" element={<DeskCalendar />} />
            
            {/* Admin Authentication & Management Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </RootLayout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

