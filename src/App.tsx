import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Callback } from './pages/Callback';
import { Commands } from './pages/Commands';
import { Features } from './pages/Features';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/commands" element={<Commands />} />
      <Route path="/features" element={<Features />} />
    </Routes>
  );
}
