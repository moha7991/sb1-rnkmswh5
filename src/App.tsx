import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import CategoryPage from './pages/CategoryPage';
import Account from './pages/Account';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="flex-grow">
              <Hero />
              <ProductGrid />
            </main>
          } />
          <Route path="/connexion" element={<Login />} />
          <Route path="/inscription" element={<Register />} />
          <Route path="/categorie/:id" element={<CategoryPage />} />
          <Route path="/mon-compte" element={<Account />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;