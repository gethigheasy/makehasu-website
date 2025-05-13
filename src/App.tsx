import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Callback } from './pages/Callback';
import { Commands } from './pages/Commands';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/commands" element={<Commands />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
